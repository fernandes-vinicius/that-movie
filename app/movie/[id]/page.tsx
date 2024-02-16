import Image from 'next/image'
import { notFound } from 'next/navigation'

import { MovieHero } from '@/_components/movie-hero'
import { getMovie } from '@/_lib/tmdb-api/services'
import { buildImageUrl } from '@/_lib/tmdb-api/utils'
import { currencyFormat } from '@/_lib/utils'

import { BackButton } from './_components/back-button'

interface Props {
  params: {
    id: string
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
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {mainCast.map((cast) => (
              <li key={cast.id} className="flex flex-col gap-2 overflow-hidden">
                <Image
                  src={buildImageUrl(cast.profile_path)}
                  alt={cast.name}
                  width={200}
                  height={300}
                  className="w-full rounded-md object-cover"
                />

                <div className="flex flex-col truncate">
                  <span className="truncate font-medium">{cast.name}</span>
                  <span className="truncate text-sm leading-none text-neutral-400">
                    {cast.character}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}
