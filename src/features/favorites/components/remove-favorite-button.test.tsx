import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactNode } from "react";
import { RemoveFavoriteButton } from "./remove-favorite-button";
import {
  FavoritesProvider,
  useFavorites,
} from "@/shared/contexts/favorites-context";
import type { Movie } from "@/shared/types/tmdb-types";

const movie: Movie = {
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

const STORAGE_KEY = "movie-db:favorites";

function wrapper({ children }: { children: ReactNode }) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}

function FavoritesCountDisplay() {
  const { favorites } = useFavorites();
  return <span data-testid="count">{favorites.length}</span>;
}

describe("RemoveFavoriteButton", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('exibe aria-label "Remover dos favoritos"', () => {
    render(<RemoveFavoriteButton movieId={movie.id} />, { wrapper });

    expect(
      screen.getByRole("button", { name: /remover dos favoritos/i }),
    ).toBeInTheDocument();
  });

  it("remove o filme dos favoritos ao clicar", async () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([movie]));

    const user = userEvent.setup();

    render(
      <>
        <FavoritesCountDisplay />
        <RemoveFavoriteButton movieId={movie.id} />
      </>,
      { wrapper },
    );

    expect(screen.getByTestId("count")).toHaveTextContent("1");

    await user.click(
      screen.getByRole("button", { name: /remover dos favoritos/i }),
    );

    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });
});
