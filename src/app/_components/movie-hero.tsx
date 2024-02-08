import Image from 'next/image'
import Link from 'next/link'

import { InfoIcon } from 'lucide-react'

import { MovieImage } from '@/_components/movie-image'
import { MovieRating } from '@/_components/movie-rating'
import { Button } from '@/_components/ui/button'
import { getGenres } from '@/_lib/tmdb-api/services'
import type { Movie } from '@/_lib/tmdb-api/types'
import { buildImageUrl } from '@/_lib/tmdb-api/utils'
import { formatDate } from '@/_lib/utils'

interface Props {
  movie: Movie
}

export async function MovieHero({ movie }: Props) {
  const genres = await getGenres()

  const movieGenres = movie.genre_ids.reduce((acc: string[], genreId) => {
    const genre = genres?.find((genre) => genre.id === genreId)
    if (genre) {
      acc.push(genre.name)
    }
    return acc
  }, [])

  const genderNames = movieGenres.join(', ')
  const posterUrl = buildImageUrl(movie.poster_path)
  const ratingPercent = Math.round(movie.vote_average * 10)

  return (
    <section id="movie" className="grid gap-10 md:grid-cols-[300px_1fr]">
      <MovieImage src={posterUrl} alt={movie.title} />

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h1 className="flex-1 text-2xl font-medium">{movie.title}</h1>
          <MovieRating rating={movie.vote_average} />
        </div>

        <p className="leading-7 text-neutral-300 md:line-clamp-4">
          {movie.overview}
        </p>

        <div className="grid grid-cols-2 items-center gap-4 lg:grid-cols-3">
          <span className="font-medium text-green-400">{`${ratingPercent}% relevante`}</span>
          <span>{formatDate(movie.release_date)}</span>
          {genderNames && (
            <span className="col-span-full lg:col-span-1">{genderNames}</span>
          )}
        </div>

        <Button asChild type="button" size="lg" className="w-full sm:w-fit">
          <Link href={`/movie/${movie.id}`} aria-label={movie.title}>
            <InfoIcon className="size-4" />
            Saiba mais
          </Link>
        </Button>
      </div>
    </section>
  )
}
