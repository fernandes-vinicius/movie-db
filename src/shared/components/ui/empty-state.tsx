import type * as React from "react";
import { cn } from "@/lib/utils";

function EmptyState({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="empty-state"
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-16 text-center",
        className,
      )}
      {...props}
    />
  );
}

function EmptyStateIcon({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="empty-state-icon"
      className={cn(
        "flex size-16 items-center justify-center rounded-full bg-muted text-muted-foreground",
        className,
      )}
      {...props}
    />
  );
}

function EmptyStateTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      data-slot="empty-state-title"
      className={cn("font-semibold text-foreground text-lg", className)}
      {...props}
    />
  );
}

function EmptyStateDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      data-slot="empty-state-description"
      className={cn(
        "max-w-sm text-balance text-muted-foreground text-sm",
        className,
      )}
      {...props}
    />
  );
}

function EmptyStateAction({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="empty-state-action"
      className={cn("mt-2", className)}
      {...props}
    />
  );
}

export {
  EmptyState,
  EmptyStateAction,
  EmptyStateDescription,
  EmptyStateIcon,
  EmptyStateTitle,
};
