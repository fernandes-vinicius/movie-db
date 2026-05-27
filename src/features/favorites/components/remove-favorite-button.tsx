import type * as React from "react";
import { cn } from "@/lib/utils";
import { TrashIcon } from "@/shared/components/icons";
import { Button } from "@/shared/components/ui/button";
import { useFavorites } from "@/shared/contexts/favorites-context";

interface RemoveFavoriteButtonProps {
  movieId: number;
  className?: string;
}

export function RemoveFavoriteButton({
  movieId,
  className,
}: RemoveFavoriteButtonProps) {
  const { removeFavorite } = useFavorites();

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    removeFavorite(movieId);
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Remover dos favoritos"
      onClick={handleClick}
      className={cn(
        "bg-background/80 backdrop-blur-sm hover:bg-background hover:text-destructive",
        className,
      )}
    >
      <TrashIcon aria-hidden="true" />
    </Button>
  );
}
