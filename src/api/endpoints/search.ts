import { httpClient } from "@/api/http-client";
import type { Movie, PaginatedResponse } from "@/shared/types/tmdb-types";

export async function searchMovies(
  query: string,
  page = 1,
): Promise<PaginatedResponse<Movie>> {
  const { data } = await httpClient.get<PaginatedResponse<Movie>>(
    "/search/movie",
    { params: { query, page } },
  );
  return data;
}
