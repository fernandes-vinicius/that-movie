import { notFound } from 'next/navigation'

import { MovieHero } from '@/_components/movie-hero'
import { getMovie } from '@/_lib/tmdb-api/services'

interface Props {
  params: {
    id: string
  }
}

export default async function MoviePage({ params }: Props) {
  const movie = await getMovie(params.id)

  if (!movie) {
    notFound()
  }

  return (
    <main id="movie" role="main" className="flex flex-1 flex-col">
      <MovieHero movie={movie} />
    </main>
  )
}
