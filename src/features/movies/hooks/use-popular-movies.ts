import { useInfiniteQuery } from "@tanstack/react-query";
import { getPopularMovies } from "@/api/endpoints/movies";

export function usePopularMovies() {
  return useInfiniteQuery({
    queryKey: ["movies", "popular"],
    queryFn: ({ pageParam }) => getPopularMovies(pageParam),
    initialPageParam: 1,
    getNextPageParam: ({ page, total_pages }) =>
      page < total_pages ? page + 1 : undefined,
  });
}
