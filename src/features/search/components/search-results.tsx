import { MovieGrid } from "@/features/movies/components/movie-grid";
import { useSearchMovies } from "@/features/search/hooks/use-search-movies";
import { ClapperboardIcon, SearchIcon } from "@/shared/components/icons";
import {
  EmptyState,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
} from "@/shared/components/ui/empty-state";
import { HighlightText } from "@/shared/components/ui/highlight-text";

interface SearchResultsProps {
  query: string;
}

export function SearchResults({ query = "" }: SearchResultsProps) {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useSearchMovies(query);

  if (!query.trim()) {
    return (
      <EmptyState>
        <EmptyStateIcon>
          <SearchIcon size={28} />
        </EmptyStateIcon>
        <EmptyStateTitle>O que você está procurando?</EmptyStateTitle>
        <EmptyStateDescription>
          Digite o nome de um filme na barra de busca acima.
        </EmptyStateDescription>
      </EmptyState>
    );
  }

  const movies = data?.pages.flatMap((page) => page.results) ?? [];
  const totalResults = data?.pages[0]?.total_results ?? 0;

  return (
    <>
      <section className="mb-6">
        <h1 className="font-bold text-2xl text-foreground">
          Resultados para: <span className="text-accent">"{query}"</span>
        </h1>
        {!isLoading && !isError && (
          <p className="mt-1 text-muted-foreground text-sm">
            Encontrados {totalResults.toLocaleString("pt-BR")} filmes
          </p>
        )}
      </section>

      {isError && (
        <EmptyState>
          <EmptyStateIcon>
            <SearchIcon size={28} />
          </EmptyStateIcon>
          <EmptyStateTitle>Erro na busca</EmptyStateTitle>
          <EmptyStateDescription>
            Não foi possível buscar por "{query}". Tente novamente.
          </EmptyStateDescription>
        </EmptyState>
      )}

      {!isLoading && !isError && movies.length === 0 && (
        <EmptyState>
          <EmptyStateIcon>
            <ClapperboardIcon size={28} />
          </EmptyStateIcon>
          <EmptyStateTitle>Nenhum resultado encontrado</EmptyStateTitle>
          <EmptyStateDescription>
            Não encontramos filmes para "{query}". Tente outro termo.
          </EmptyStateDescription>
        </EmptyState>
      )}

      {!isError && (movies.length > 0 || isLoading) && (
        <MovieGrid
          movies={movies}
          isLoading={isLoading}
          renderTitle={(movie) => (
            <HighlightText text={movie.title} highlight={query} />
          )}
          onLoadMore={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
        />
      )}
    </>
  );
}
