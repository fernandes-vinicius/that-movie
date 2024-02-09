import Link from 'next/link'

import { MovieImage } from '@/_components/movie-image'
import { searchMovie } from '@/_lib/tmdb-api/services'
import { buildImageUrl } from '@/_lib/tmdb-api/utils'

interface Props {
  query: string
}

export async function SearchedMovies({ query }: Props) {
  const searchedMovies = await searchMovie(query)

  if (!searchedMovies?.results) {
    return null
  }

  if (searchedMovies.results.length === 0) {
    return (
      <p className="my-4 text-center">
        Não conseguimos encontrar nada sobre <strong>{`"${query}"`}</strong>
      </p>
    )
  }

  return (
    <ul className="movie-grid">
      {searchedMovies.results.map((movie) => {
        const imageUrl = buildImageUrl(movie.poster_path)

        return (
          <li key={movie.id}>
            <Link href={`/movie/${movie.id}`} aria-label="Go to movie">
              <MovieImage src={imageUrl} alt={movie.title} />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
