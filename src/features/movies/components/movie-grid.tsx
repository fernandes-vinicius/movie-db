import type { ReactNode } from "react";
import {
  MovieCard,
  MovieCardFooter,
  MovieCardPoster,
  MovieCardTitle,
} from "@/features/movies/components/movie-card";
import { MovieRatingBadge } from "@/features/movies/components/movie-rating-badge";
import { LoadMoreButton } from "@/shared/components/load-more-button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import type { Movie } from "@/shared/types/tmdb-types";
import { getImageUrl } from "@/shared/utils/get-image-url";

const gridClass =
  "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5";

interface MovieGridProps {
  movies: Movie[];
  isLoading?: boolean;
  skeletonCount?: number;
  renderTitle?: (movie: Movie) => ReactNode;
  onLoadMore?: () => void;
  isFetchingNextPage?: boolean;
  hasNextPage?: boolean;
}

export function MovieGrid({
  movies,
  isLoading = false,
  skeletonCount = 10,
  renderTitle,
  onLoadMore,
  isFetchingNextPage = false,
  hasNextPage = false,
}: MovieGridProps) {
  if (isLoading) {
    return (
      <div
        role="status"
        aria-busy="true"
        aria-label="Carregando filmes"
        className={gridClass}
      >
        {Array.from({ length: skeletonCount }).map((_, i) => (
          <Skeleton key={String(i)} className="aspect-2/3 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className={gridClass}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} to={`/movie/${movie.id}`}>
            <MovieCardPoster
              src={getImageUrl(movie.poster_path, "w342")}
              alt={movie.title}
            />
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
