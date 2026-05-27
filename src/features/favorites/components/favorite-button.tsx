import type * as React from "react";
import { cn } from "@/lib/utils";
import { HeartIcon } from "@/shared/components/icons";
import { Button } from "@/shared/components/ui/button";
import { useFavorites } from "@/shared/contexts/favorites-context";
import type { Movie } from "@/shared/types/tmdb-types";

interface FavoriteButtonProps {
  movie: Movie;
  className?: string;
}

export function FavoriteButton({ movie, className }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(movie.id);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(movie);
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={active ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      aria-pressed={active}
      onClick={handleClick}
      className={cn(
        "bg-background/80 backdrop-blur-sm hover:bg-background",
        active && "text-destructive",
        className,
      )}
    >
      <HeartIcon aria-hidden="true" className={cn(active && "fill-current")} />
    </Button>
  );
}
