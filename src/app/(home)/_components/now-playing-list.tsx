import Link from 'next/link'

import { MovieImage } from '@/_components/movie-image'
import { Pagination } from '@/_components/pagination'
import { getNowPlaying } from '@/_lib/tmdb-api/services'
import { buildImageUrl } from '@/_lib/tmdb-api/utils'

interface Props {
  currentPage: number
}

export async function NowPlayingList({ currentPage }: Props) {
  const nowPlaying = await getNowPlaying(currentPage)

  return (
    <div className="space-y-10">
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {nowPlaying?.results.map((movie) => {
          const imageUrl = buildImageUrl(movie.poster_path)

          return (
            <li
              key={movie.id}
              className="transition-transform sm:hover:scale-95"
            >
              <Link
                href={`/movie/${movie.id}`}
                aria-label={movie.title}
                title={movie.title}
              >
                <MovieImage src={imageUrl} alt={movie.title} />
              </Link>
            </li>
          )
        })}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={nowPlaying?.total_pages || 1}
      />
    </div>
  )
}
