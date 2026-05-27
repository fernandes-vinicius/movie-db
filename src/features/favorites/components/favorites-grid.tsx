import { useMemo } from "react";
import { Link } from "react-router";
import { FavoritesSort } from "@/features/favorites/components/favorites-sort";
import { RemoveFavoriteButton } from "@/features/favorites/components/remove-favorite-button";
import { useFavoritesSort } from "@/features/favorites/hooks/use-favorites-sort";
import {
  MovieCard,
  MovieCardAction,
  MovieCardFooter,
  MovieCardPoster,
  MovieCardTitle,
} from "@/features/movies/components/movie-card";
import { MovieRatingBadge } from "@/features/movies/components/movie-rating-badge";
import { HeartIcon } from "@/shared/components/icons";
import { Button } from "@/shared/components/ui/button";
import {
  EmptyState,
  EmptyStateAction,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "@/shared/components/ui/empty-state";
import { useFavorites } from "@/shared/contexts/favorites-context";
import { getImageUrl } from "@/shared/utils/get-image-url";

export function FavoritesGrid() {
  const { favorites } = useFavorites();

  const [sortBy] = useFavoritesSort();

  const sorted = useMemo(() => {
    return [...favorites].sort((a, b) => {
      if (sortBy === "title-asc") {
        return a.title.localeCompare(b.title, "pt");
      }
      if (sortBy === "title-desc") {
        return b.title.localeCompare(a.title, "pt");
      }
      if (sortBy === "rating-desc") {
        return b.vote_average - a.vote_average;
      }
      return a.vote_average - b.vote_average;
    });
  }, [favorites, sortBy]);

  if (favorites.length === 0) {
    return (
      <EmptyState>
        <EmptyStateIcon>
          <HeartIcon size={28} />
        </EmptyStateIcon>
        <EmptyStateTitle>Nenhum filme favorito ainda</EmptyStateTitle>
        <EmptyStateDescription>
          Comece explorando filmes populares e adicione seus favoritos!
        </EmptyStateDescription>
        <EmptyStateAction>
          <Button asChild>
            <Link to="/">Explorar filmes</Link>
          </Button>
        </EmptyStateAction>
      </EmptyState>
    );
  }

  return (
    <>
      <h1 className="mb-6 font-bold text-3xl text-foreground">
        Meus Filmes Favoritos
      </h1>

      <div className="mb-6">
        <FavoritesSort />
      </div>

      <div className="movie-grid">
        {sorted.map((movie) => (
          <MovieCard key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCardPoster
              src={getImageUrl(movie.poster_path, "w342")}
              alt={movie.title}
            >
              <MovieCardAction>
                <RemoveFavoriteButton movieId={movie.id} />
              </MovieCardAction>
            </MovieCardPoster>
            <MovieCardFooter>
              <MovieCardTitle>{movie.title}</MovieCardTitle>
              <MovieRatingBadge rating={movie.vote_average} />
            </MovieCardFooter>
          </MovieCard>
        ))}
      </div>
    </>
  );
}
