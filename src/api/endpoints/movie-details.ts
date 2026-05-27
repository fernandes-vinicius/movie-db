import { httpClient } from "@/api/http-client";
import type { MovieDetails } from "@/shared/types/tmdb-types";

export async function getMovieDetails(id: number): Promise<MovieDetails> {
  const { data } = await httpClient.get<MovieDetails>(`/movie/${id}`);
  return data;
}
