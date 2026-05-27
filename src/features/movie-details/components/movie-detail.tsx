import { GenreBadge } from "@/features/movie-details/components/genre-badge";
import { MovieDetailSkeleton } from "@/features/movie-details/components/movie-detail-skeleton";
import { useMovieDetails } from "@/features/movie-details/hooks/use-movie-details";
import { MovieRatingBadge } from "@/features/movies/components/movie-rating-badge";
import { ClapperboardIcon, HeartIcon } from "@/shared/components/icons";
import { Button } from "@/shared/components/ui/button";
import {
  EmptyState,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "@/shared/components/ui/empty-state";
import { useFavorites } from "@/shared/contexts/favorites-context";
import { cn } from "@/lib/utils";
import { formatDate } from "@/shared/utils/format-date";
import { getImageUrl } from "@/shared/utils/get-image-url";

interface MovieDetailViewProps {
  movieId: number;
}

export function MovieDetailView({ movieId }: MovieDetailViewProps) {
  const { data: movie, isLoading, isError } = useMovieDetails(movieId);
  const { isFavorite, toggleFavorite } = useFavorites();

  if (isLoading) return <MovieDetailSkeleton />;

  if (isError || !movie) {
    return (
      <EmptyState>
        <EmptyStateIcon>
          <ClapperboardIcon size={28} />
        </EmptyStateIcon>
        <EmptyStateTitle>Filme não encontrado</EmptyStateTitle>
        <EmptyStateDescription>
          Não foi possível carregar os detalhes deste filme.
        </EmptyStateDescription>
      </EmptyState>
    );
  }

  const safeMovie = movie;
  const active = isFavorite(safeMovie.id);

  function handleFavoriteClick() {
    toggleFavorite({
      id: safeMovie.id,
      title: safeMovie.title,
      poster_path: safeMovie.poster_path,
      backdrop_path: safeMovie.backdrop_path,
      vote_average: safeMovie.vote_average,
      vote_count: safeMovie.vote_count,
      release_date: safeMovie.release_date,
      overview: safeMovie.overview,
      genre_ids: safeMovie.genres.map((g) => g.id),
    });
  }

  const backdropUrl = getImageUrl(movie.backdrop_path, "original");

  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-start">
      <div className="w-full overflow-hidden rounded-xl bg-muted md:w-3/5">
        {backdropUrl ? (
          <img
            src={backdropUrl}
            alt={`Backdrop de ${movie.title}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex aspect-video items-center justify-center text-muted-foreground text-sm">
            Imagem Backdrop
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <h1 className="font-bold text-3xl text-foreground">{movie.title}</h1>

        <div className="flex flex-wrap gap-2">
          {movie.genres.map((genre) => (
            <GenreBadge key={genre.id} genre={genre} />
          ))}
        </div>

        <div className="flex flex-col gap-1.5 text-sm">
          <p>
            <span className="font-semibold text-foreground">
              Data de lançamento:
            </span>{" "}
            <span className="text-muted-foreground">
              {formatDate(movie.release_date)}
            </span>
          </p>
          <p className="flex items-center gap-1.5">
            <span className="font-semibold text-foreground">Nota TMDB:</span>
            <MovieRatingBadge rating={movie.vote_average} />
          </p>
        </div>

        {movie.overview && (
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-foreground text-lg">Sinopse</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {movie.overview}
            </p>
          </div>
        )}

        <Button
          variant={active ? "destructive" : "outline"}
          size="lg"
          className="mt-2 w-fit"
          onClick={handleFavoriteClick}
        >
          <HeartIcon size={18} className={cn(active && "fill-current")} />
          {active ? "Remover dos Favoritos" : "Adicionar aos Favoritos"}
        </Button>
      </div>
    </div>
  );
}
