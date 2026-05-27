import type { ReactNode } from "react";
import { FavoriteButton } from "@/features/favorites/components/favorite-button";
import {
  MovieCard,
  MovieCardAction,
  MovieCardFooter,
  MovieCardPoster,
  MovieCardTitle,
} from "@/features/movies/components/movie-card";
import { MovieRatingBadge } from "@/features/movies/components/movie-rating-badge";
import { LoadMoreButton } from "@/shared/components/load-more-button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import type { Movie } from "@/shared/types/tmdb-types";
import { getImageUrl } from "@/shared/utils/get-image-url";

const SKELETON_COUNT = 10;

interface MovieGridProps {
  movies: Movie[];
  isLoading?: boolean;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  onLoadMore?: () => void;
  renderTitle?: (movie: Movie) => ReactNode;
}

export function MovieGrid({
  movies,
  isLoading = false,
  hasNextPage = false,
  isFetchingNextPage = false,
  onLoadMore,
  renderTitle,
}: MovieGridProps) {
  if (isLoading) {
    return (
      <div
        role="status"
        aria-busy="true"
        aria-label="Carregando filmes"
        className="movie-grid"
      >
        {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
          <Skeleton key={String(i)} className="aspect-2/3 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCardPoster
              src={getImageUrl(movie.poster_path, "w342")}
              alt={movie.title}
            >
              <MovieCardAction>
                <FavoriteButton movie={movie} />
              </MovieCardAction>
            </MovieCardPoster>
            <MovieCardFooter>
              <MovieCardTitle>
                {renderTitle ? renderTitle(movie) : movie.title}
              </MovieCardTitle>
              <MovieRatingBadge rating={movie.vote_average} />
            </MovieCardFooter>
          </MovieCard>
        ))}
      </div>

      <div className="flex justify-center py-8">
        <LoadMoreButton
          onLoadMore={onLoadMore ?? (() => {})}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
        />
      </div>
    </>
  );
}
