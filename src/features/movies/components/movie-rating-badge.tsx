import type * as React from "react";
import { cn } from "@/lib/utils";

interface RatingBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  rating: number;
}

export function MovieRatingBadge({
  rating,
  className,
  ...props
}: RatingBadgeProps) {
  return (
    <span
      data-slot="movie-rating-badge"
      className={cn(
        "inline-flex items-center gap-0.5 self-start rounded-full px-2 py-0.5 font-semibold text-xs",
        "bg-accent/20 text-accent",
        className,
      )}
      {...props}
    >
      ★ {rating.toFixed(1)}
    </span>
  );
}
