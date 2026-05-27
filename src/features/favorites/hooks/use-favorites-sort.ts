import { parseAsStringLiteral, useQueryState } from "nuqs";

export const SORT_OPTIONS = [
  "title-asc",
  "title-desc",
  "rating-desc",
] as const;

export type SortOption = (typeof SORT_OPTIONS)[number];

const parser = parseAsStringLiteral(SORT_OPTIONS).withDefault(
  "title-asc" satisfies SortOption,
);

export function useFavoritesSort() {
  return useQueryState<SortOption>("sort", parser);
}
