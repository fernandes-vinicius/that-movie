import { Skeleton } from '@/_components/ui/skeleton'
import { randomUUID } from 'crypto'

export function MoviesGridSkeleton() {
  return (
    <div className="movie-grid">
      {Array.from({ length: 24 }).map((_, index) => (
        <Skeleton
          key={crypto.randomUUID() + index}
          className="min-h-[300px] w-full"
        />
      ))}
    </div>
  )
}
