import { notFound } from 'next/navigation'

import { MovieHero } from '@/_components/movie-hero'
import { getMovie } from '@/_lib/tmdb-api/services'

import { BackButton } from './_components/back-button'

interface Props {
  params: {
    id: string
  }
}

export default async function MoviePage({ params }: Props) {
  const movie = await getMovie(params.id)

  console.log(movie)

  const minutes = movie?.runtime && Math.floor(movie.runtime / 60)
  const seconds = movie?.runtime && movie.runtime % 60

  if (!movie) {
    notFound()
  }

  return (
    <main id="movie" role="main" className="flex flex-1 flex-col gap-10">
      <MovieHero movie={movie} action={<BackButton />} />

      <section className="grid grid-cols-3">
        {movie.runtime && (
          <div className="flex flex-col gap-6">
            <h4 className="font-medium">Duração</h4>
            <strong>{movie.runtime}</strong>
          </div>
        )}
      </section>
    </main>
  )
}
