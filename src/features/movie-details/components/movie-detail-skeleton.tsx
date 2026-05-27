import { Skeleton } from "@/shared/components/ui/skeleton";

export function MovieDetailSkeleton() {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-start">
      <Skeleton className="aspect-video w-full rounded-xl md:w-3/5" />

      <div className="flex flex-1 flex-col gap-4">
        <Skeleton className="h-10 w-3/4" />

        <div className="flex gap-2">
          <Skeleton className="h-7 w-16 rounded-full" />
          <Skeleton className="h-7 w-20 rounded-full" />
          <Skeleton className="h-7 w-14 rounded-full" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-64" />
          <Skeleton className="h-4 w-48" />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        <Skeleton className="mt-2 h-12 w-56 rounded-full" />
      </div>
    </div>
  );
}
