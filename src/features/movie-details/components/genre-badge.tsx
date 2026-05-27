import { buttonVariants } from "@/shared/components/ui/button";
import type { Genre } from "@/shared/types/tmdb-types";

interface GenreBadgeProps {
  genre: Genre;
}

export function GenreBadge({ genre }: GenreBadgeProps) {
  return (
    <span className={buttonVariants({ variant: "default", size: "sm" })}>
      {genre.name}
    </span>
  );
}
