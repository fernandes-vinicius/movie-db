import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactNode } from "react";
import { FavoritesProvider } from "@/shared/contexts/favorites-context";
import type { Movie } from "@/shared/types/tmdb-types";
import { FavoriteButton } from "./favorite-button";

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

function wrapper({ children }: { children: ReactNode }) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}

describe("FavoriteButton", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('exibe aria-label "Adicionar aos Favoritos" quando filme não é favorito', () => {
    render(<FavoriteButton movie={movie} />, { wrapper });

    expect(
      screen.getByRole("button", { name: /adicionar aos favoritos/i }),
    ).toBeInTheDocument();
  });

  it("aria-pressed é false quando filme não é favorito", () => {
    render(<FavoriteButton movie={movie} />, { wrapper });

    expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "false");
  });

  it('exibe aria-label "Remover dos Favoritos" após adicionar aos favoritos', async () => {
    const user = userEvent.setup();
    render(<FavoriteButton movie={movie} />, { wrapper });

    await user.click(screen.getByRole("button"));

    expect(
      screen.getByRole("button", { name: /remover dos favoritos/i }),
    ).toBeInTheDocument();
  });

  it("aria-pressed é true após adicionar aos favoritos", async () => {
    const user = userEvent.setup();
    render(<FavoriteButton movie={movie} />, { wrapper });

    await user.click(screen.getByRole("button"));

    expect(screen.getByRole("button")).toHaveAttribute("aria-pressed", "true");
  });

  it("alterna o estado ao clicar duas vezes", async () => {
    const user = userEvent.setup();
    render(<FavoriteButton movie={movie} />, { wrapper });

    const button = screen.getByRole("button");

    await user.click(button);
    expect(button).toHaveAttribute("aria-pressed", "true");

    await user.click(button);
    expect(button).toHaveAttribute("aria-pressed", "false");
  });
});
