import Link from 'next/link'

import { InfoIcon } from 'lucide-react'

import { MovieImage } from '@/_components/movie-image'
import { MovieRating } from '@/_components/movie-rating'
import { Button } from '@/_components/ui/button'
import type { Movie } from '@/_lib/tmdb-api/types'
import { buildImageUrl } from '@/_lib/tmdb-api/utils'
import { formatDate } from '@/_lib/utils'

interface Props {
  movie: Movie
  action?: React.ReactNode
}

export async function MovieHero({ movie, action }: Props) {
  const posterUrl = buildImageUrl(movie.poster_path)
  const ratingPercent = Math.round(movie.vote_average * 10)

  const genresNames = movie.genres?.map((genre) => genre.name).join(', ')

  return (
    <section id="movie-hero" className="grid gap-10 md:grid-cols-[300px_1fr]">
      <MovieImage src={posterUrl} alt={movie.title} />

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="flex-1 text-2xl font-medium">{movie.title}</h1>
          <MovieRating rating={movie.vote_average} />
        </div>

        {movie.overview && (
          <p className="leading-7 text-neutral-300 md:line-clamp-4">
            {movie.overview}
          </p>
        )}

        <div className="grid grid-cols-2 items-center gap-4 lg:grid-cols-3">
          <span className="font-medium text-green-400">{`${ratingPercent}% relevante`}</span>

          {movie.release_date && <span>{formatDate(movie.release_date)}</span>}

          {genresNames && (
            <span className="col-span-full lg:col-span-1">{genresNames}</span>
          )}
        </div>

        {action && action}
      </div>
    </section>
  )
}
