import { httpClient } from "@/api/http-client";
import type { Movie, PaginatedResponse } from "@/shared/types/tmdb-types";

export async function getPopularMovies(
  page = 1,
): Promise<PaginatedResponse<Movie>> {
  const { data } = await httpClient.get<PaginatedResponse<Movie>>(
    "/movie/popular",
    { params: { page } },
  );
  return data;
}
