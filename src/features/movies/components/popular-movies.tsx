import { MovieGrid } from "@/features/movies/components/movie-grid";
import { usePopularMovies } from "@/features/movies/hooks/use-popular-movies";
import { SparklesIcon } from "@/shared/components/icons";
import {
  EmptyState,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "@/shared/components/ui/empty-state";

export function PopularMovies() {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = usePopularMovies();

  if (isError) {
    return (
      <EmptyState>
        <EmptyStateIcon>
          <SparklesIcon size={28} />
        </EmptyStateIcon>
        <EmptyStateTitle>Não foi possível carregar</EmptyStateTitle>
        <EmptyStateDescription>
          Erro ao buscar filmes populares. Tente novamente mais tarde.
        </EmptyStateDescription>
      </EmptyState>
    );
  }

  const movies = data?.pages.flatMap((page) => page.results) ?? [];

  if (!isLoading && movies.length === 0) {
    return (
      <EmptyState>
        <EmptyStateIcon>
          <SparklesIcon size={28} />
        </EmptyStateIcon>
        <EmptyStateTitle>Nenhum filme encontrado</EmptyStateTitle>
        <EmptyStateDescription>
          Não há filmes populares no momento. Tente novamente mais tarde.
        </EmptyStateDescription>
      </EmptyState>
    );
  }

  return (
    <MovieGrid
      movies={movies}
      isLoading={isLoading}
      onLoadMore={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
      hasNextPage={hasNextPage}
    />
  );
}
