import { Skeleton } from '@/_components/ui/skeleton'

export function MovieHeroSkeleton() {
  return (
    <div className="grid gap-10 md:grid-cols-[300px_1fr]">
      <Skeleton className="h-[300px] w-full" />

      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between gap-4">
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-8 w-14" />
        </div>

        <Skeleton className="h-16 w-full" />

        <div className="grid grid-cols-2 items-center gap-x-10 gap-y-6 lg:grid-cols-3">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
        </div>

        <Skeleton className="h-10 w-full rounded-md sm:w-40" />
      </div>
    </div>
  )
}
