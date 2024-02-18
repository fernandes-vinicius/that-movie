import Link from 'next/link'

import { MovieImage } from '@/_components/movie-image'
import { getRecommendations } from '@/_lib/tmdb-api/services'
import { buildImageUrl } from '@/_lib/tmdb-api/utils'

interface Props {
  movieId: number
}

export async function Recommendations({ movieId }: Props) {
  const recommendations = await getRecommendations(movieId)

  if (!recommendations?.results) {
    return null
  }

  return (
    <ul className="movie-grid">
      {recommendations?.results.map((movie) => {
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
  )
}
