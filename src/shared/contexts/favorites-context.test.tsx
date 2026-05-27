import { act, renderHook } from "@testing-library/react";
import type { ReactNode } from "react";
import type { Movie } from "@/shared/types/tmdb-types";
import { FavoritesProvider, useFavorites } from "./favorites-context";

const movieA: Movie = {
  id: 1,
  title: "Inception",
  poster_path: "/poster.jpg",
  backdrop_path: "/backdrop.jpg",
  vote_average: 8.8,
  vote_count: 1000,
  release_date: "2010-07-16",
  overview: "A thief who steals corporate secrets.",
  genre_ids: [28, 878],
};

const movieB: Movie = {
  id: 2,
  title: "Interstellar",
  poster_path: null,
  backdrop_path: null,
  vote_average: 8.6,
  vote_count: 900,
  release_date: "2014-11-07",
  overview: "A team of explorers travel through a wormhole.",
  genre_ids: [18, 878],
};

function wrapper({ children }: { children: ReactNode }) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}

describe("useFavorites", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("inicia com lista de favoritos vazia", () => {
    const { result } = renderHook(() => useFavorites(), { wrapper });

    expect(result.current.favorites).toEqual([]);
  });

  it("addFavorite adiciona um filme à lista", () => {
    const { result } = renderHook(() => useFavorites(), { wrapper });

    act(() => {
      result.current.addFavorite(movieA);
    });

    expect(result.current.favorites).toHaveLength(1);
    expect(result.current.favorites[0].id).toBe(movieA.id);
  });

  it("addFavorite não duplica um filme já favoritado", () => {
    const { result } = renderHook(() => useFavorites(), { wrapper });

    act(() => {
      result.current.addFavorite(movieA);
      result.current.addFavorite(movieA);
    });

    expect(result.current.favorites).toHaveLength(1);
  });

  it("removeFavorite remove apenas o filme pelo id informado", () => {
    const { result } = renderHook(() => useFavorites(), { wrapper });

    act(() => {
      result.current.addFavorite(movieA);
      result.current.addFavorite(movieB);
    });

    act(() => {
      result.current.removeFavorite(movieA.id);
    });

    expect(result.current.favorites).toHaveLength(1);
    expect(result.current.favorites[0].id).toBe(movieB.id);
  });

  it("isFavorite retorna true para filme favoritado", () => {
    const { result } = renderHook(() => useFavorites(), { wrapper });

    act(() => {
      result.current.addFavorite(movieA);
    });

    expect(result.current.isFavorite(movieA.id)).toBe(true);
  });

  it("isFavorite retorna false para filme não favoritado", () => {
    const { result } = renderHook(() => useFavorites(), { wrapper });

    expect(result.current.isFavorite(movieA.id)).toBe(false);
  });

  it("toggleFavorite adiciona filme quando não está na lista", () => {
    const { result } = renderHook(() => useFavorites(), { wrapper });

    act(() => {
      result.current.toggleFavorite(movieA);
    });

    expect(result.current.isFavorite(movieA.id)).toBe(true);
    expect(result.current.favorites).toHaveLength(1);
  });

  it("toggleFavorite remove filme quando já está na lista", () => {
    const { result } = renderHook(() => useFavorites(), { wrapper });

    act(() => {
      result.current.addFavorite(movieA);
    });

    act(() => {
      result.current.toggleFavorite(movieA);
    });

    expect(result.current.isFavorite(movieA.id)).toBe(false);
    expect(result.current.favorites).toHaveLength(0);
  });

  it("persiste favoritos no localStorage", () => {
    const { result } = renderHook(() => useFavorites(), { wrapper });

    act(() => {
      result.current.addFavorite(movieA);
    });

    const stored = JSON.parse(
      localStorage.getItem("movie-db:favorites") ?? "[]",
    );
    expect(stored).toHaveLength(1);
    expect(stored[0].id).toBe(movieA.id);
  });

  it("restaura favoritos do localStorage ao inicializar", () => {
    localStorage.setItem("movie-db:favorites", JSON.stringify([movieA]));

    const { result } = renderHook(() => useFavorites(), { wrapper });

    expect(result.current.favorites).toHaveLength(1);
    expect(result.current.favorites[0].id).toBe(movieA.id);
  });

  it("lança erro quando usado fora do FavoritesProvider", () => {
    jest.spyOn(console, "error").mockImplementation(() => {});

    expect(() => renderHook(() => useFavorites())).toThrow(
      "useFavorites must be used within a <FavoritesProvider />",
    );

    jest.restoreAllMocks();
  });
});
