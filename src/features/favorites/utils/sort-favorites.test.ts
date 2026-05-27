import type { Movie } from "@/shared/types/tmdb-types";
import { sortFavorites } from "./sort-favorites";

const movie = (id: number, title: string, vote_average: number): Movie => ({
  id,
  title,
  vote_average,
  poster_path: null,
  backdrop_path: null,
  vote_count: 100,
  release_date: "2020-01-01",
  overview: "",
  genre_ids: [],
});

const avenida = movie(1, "Avenida Brasil", 7.0);
const clube = movie(2, "Clube da Luta", 8.8);
const matrix = movie(3, "Matrix", 9.0);

const movies = [matrix, avenida, clube];

describe("sortFavorites", () => {
  it("title-asc ordena de A a Z", () => {
    const result = sortFavorites(movies, "title-asc");
    expect(result.map((m) => m.id)).toEqual([1, 2, 3]);
  });

  it("title-desc ordena de Z a A", () => {
    const result = sortFavorites(movies, "title-desc");
    expect(result.map((m) => m.id)).toEqual([3, 2, 1]);
  });

  it("rating-desc ordena da maior para menor nota", () => {
    const result = sortFavorites(movies, "rating-desc");
    expect(result.map((m) => m.id)).toEqual([3, 2, 1]);
  });

  it("não mutua o array original", () => {
    const original = [...movies];
    sortFavorites(movies, "title-asc");
    expect(movies).toEqual(original);
  });

  it("retorna array vazio quando recebe array vazio", () => {
    expect(sortFavorites([], "title-asc")).toEqual([]);
  });
});
