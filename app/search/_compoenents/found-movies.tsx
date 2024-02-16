import Link from 'next/link'

import { MovieImage } from '@/_components/movie-image'
import { searchMovie } from '@/_lib/tmdb-api/services'
import { buildImageUrl } from '@/_lib/tmdb-api/utils'

interface Props {
  query: string
}

export async function FoundMovies({ query }: Props) {
  const movies = await searchMovie(query)

  if (!movies?.results) {
    return null
  }

  if (movies.results.length === 0) {
    return (
      <p className="my-4 w-full text-center sm:mx-auto sm:max-w-md">
        Não conseguimos encontrar nada em nosso catálogo sobre{' '}
        <strong>{`"${query}"`}</strong>
      </p>
    )
  }

  return (
    <ul className="movie-grid">
      {movies.results.map((movie) => {
        const imageUrl = buildImageUrl(movie.poster_path)

        return (
          <li key={movie.id} className="transition-transform sm:hover:scale-95">
            <Link href={`/movie/${movie.id}`} aria-label="Go to movie details">
              <MovieImage src={imageUrl} alt={movie.title} />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
