import type { SortOption } from "@/features/favorites/hooks/use-favorites-sort";
import type { Movie } from "@/shared/types/tmdb-types";

export function sortFavorites(movies: Movie[], sortBy: SortOption): Movie[] {
  return [...movies].sort((a, b) => {
    if (sortBy === "title-asc") return a.title.localeCompare(b.title, "pt");
    if (sortBy === "title-desc") return b.title.localeCompare(a.title, "pt");
    if (sortBy === "rating-desc") return b.vote_average - a.vote_average;
    return a.vote_average - b.vote_average;
  });
}
