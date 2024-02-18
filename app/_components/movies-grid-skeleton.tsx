import { Skeleton } from '@/_components/ui/skeleton'

const TOTAL_MOVIES = 24

export function MoviesGridSkeleton() {
  return (
    <div className="movie-grid">
      {Array.from({ length: TOTAL_MOVIES }).map((_, index) => {
        const key = crypto.randomUUID() + index
        return <Skeleton key={key} className="min-h-[300px] w-full" />
      })}
    </div>
  )
}
