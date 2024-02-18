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
      <ul className="movie-grid">
        {nowPlaying?.results.map((movie) => {
          const key = movie.id
          const imageUrl = buildImageUrl(movie.poster_path)

          return (
            <li key={key} className="transition-transform sm:hover:scale-95">
              <Link
                title={movie.title}
                aria-label={movie.title}
                href={`/movie/${movie.id}`}
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
