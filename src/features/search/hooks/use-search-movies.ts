import { useInfiniteQuery } from "@tanstack/react-query";
import { searchMovies } from "@/api/endpoints/search";

export function useSearchMovies(query: string) {
  return useInfiniteQuery({
    queryKey: ["movies", "search", query],
    queryFn: ({ pageParam }) => searchMovies(query, pageParam),
    initialPageParam: 1,
    getNextPageParam: ({ page, total_pages }) =>
      page < total_pages ? page + 1 : undefined,
    enabled: !!query.trim(),
  });
}
