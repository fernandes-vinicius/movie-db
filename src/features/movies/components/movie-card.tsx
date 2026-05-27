import type * as React from "react";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

function MovieCard({ className, ...props }: React.ComponentProps<typeof Link>) {
  return (
    <Link
      data-slot="movie-card"
      className={cn("group flex flex-col gap-2", className)}
      {...props}
    />
  );
}

interface MovieCardPosterProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string | null;
  alt: string;
}

function MovieCardPoster({
  src,
  alt,
  className,
  ...props
}: MovieCardPosterProps) {
  return (
    <div
      data-slot="movie-card-poster"
      className={cn(
        "relative aspect-2/3 overflow-hidden rounded-lg bg-muted",
        className,
      )}
      {...props}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-muted-foreground text-sm">
          Sem imagem
        </div>
      )}
    </div>
  );
}

function MovieCardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="movie-card-footer"
      className={cn("flex flex-col gap-1 px-0.5", className)}
      {...props}
    />
  );
}

function MovieCardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="movie-card-title"
      className={cn(
        "truncate font-medium text-foreground text-sm leading-snug",
        className,
      )}
      {...props}
    />
  );
}

export { MovieCard, MovieCardFooter, MovieCardPoster, MovieCardTitle };
