import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "@/api/endpoints/movie-details";

export function useMovieDetails(movieId: number) {
  return useQuery({
    queryKey: ["movies", "details", movieId],
    queryFn: () => getMovieDetails(movieId),
    enabled: !!movieId,
  });
}
