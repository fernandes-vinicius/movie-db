import { createContext, type ReactNode, useContext } from "react";
import { useLocalStorage } from "@/shared/hooks/use-local-storage";
import type { Movie } from "@/shared/types/tmdb-types";

const STORAGE_KEY = "movie-db:favorites";

interface FavoritesContextValue {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  toggleFavorite: (movie: Movie) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useLocalStorage<Movie[]>(STORAGE_KEY, []);

  function addFavorite(movie: Movie) {
    setFavorites((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  }

  function removeFavorite(id: number) {
    setFavorites((prev) => prev.filter((m) => m.id !== id));
  }

  function isFavorite(id: number) {
    return favorites.some((m) => m.id === id);
  }

  function toggleFavorite(movie: Movie) {
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a <FavoritesProvider />");
  }
  return context;
}
