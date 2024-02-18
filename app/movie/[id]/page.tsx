import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import React from 'react'

import { MovieHero } from '@/_components/movie-hero'
import { MoviesGridSkeleton } from '@/_components/movies-grid-skeleton'
import { getMovie } from '@/_lib/tmdb-api/services'
import { currencyFormat } from '@/_lib/utils'

import { BackButton } from './_components/back-button'
import { MainCast } from './_components/main-cast'
import { Recommendations } from './_components/recommendations'

interface Props {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id

  // fetch data
  const movie = await getMovie(id)

  if (!movie) {
    return {}
  }

  return {
    title: movie?.title,
  }
}

export default async function MoviePage({ params }: Props) {
  const movie = await getMovie(params.id)

  const hours = movie?.runtime ? Math.floor(movie.runtime / 60) : 0
  const minutes = movie?.runtime ? movie.runtime % 60 : 0

  const mainCast = movie?.credits?.cast.slice(0, 18) // Limit to 18 cast members

  if (!movie) {
    notFound()
  }

  return (
    <main id="movie" role="main" className="flex flex-1 flex-col gap-10">
      <MovieHero movie={movie} action={<BackButton />} />

      <section id="info" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {movie.runtime && (
          <div className="flex flex-col gap-2 rounded-md border border-neutral-800 p-4 text-center">
            <span className="text-xs">Duração</span>
            <h4 className="font-semibold">
              {hours > 0 && `${hours} hr`} {minutes > 0 && `${minutes} min`}
            </h4>
          </div>
        )}

        {movie?.budget > 0 && (
          <div className="flex flex-col gap-2 rounded-md border border-neutral-800 p-4 text-center">
            <span className="text-xs">Orçamento</span>
            <h4 className="font-semibold text-red-400">
              {currencyFormat(movie.budget)}
            </h4>
          </div>
        )}

        {movie?.revenue > 0 && (
          <div className="flex flex-col gap-2 rounded-md border border-neutral-800 p-4 text-center">
            <span className="text-xs">Receita</span>
            <h4 className="font-semibold text-green-400">
              {currencyFormat(movie.revenue)}
            </h4>
          </div>
        )}
      </section>

      <section id="cast" className="flex flex-col gap-10">
        <h3 className="text-xl font-medium">Elenco principal</h3>

        {mainCast && (
          <div className="relative w-full max-w-full px-12">
            <MainCast cast={mainCast} />
          </div>
        )}
      </section>

      <section id="recommendations" className="flex flex-col gap-10">
        <h3 className="text-xl font-medium">Recomendações</h3>
        <React.Suspense fallback={<MoviesGridSkeleton />}>
          <Recommendations movieId={movie.id} />
        </React.Suspense>
      </section>
    </main>
  )
}
