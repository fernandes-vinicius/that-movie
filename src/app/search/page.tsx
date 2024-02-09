import React from 'react'

import { MoviesGridSkeleton } from '@/_components/movies-grid-skeleton'

import { SearchInput } from './_compoenents/search-input'
import { SearchedMovies } from './_compoenents/searched-movies'

interface Props {
  searchParams: {
    q?: string
  }
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.q || ''

  return (
    <main id="search" role="main" className="flex flex-1 flex-col gap-10">
      <SearchInput />

      {!query && (
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-medium">Todos os filmes</h3>
          <p className="text-sm leading-7 text-neutral-300 sm:max-w-md">
            Assustador, engraçado, dramático, romântico... Nada como um bom
            filme para mexer com nossas emoções! Não faltam títulos e
            experiências esperando por você.
          </p>
        </div>
      )}

      {query && (
        <h3 className="text-xl font-medium">Procurando por {`"${query}"`}</h3>
      )}

      {query && (
        <React.Suspense key={query} fallback={<MoviesGridSkeleton />}>
          <SearchedMovies query={query} />
        </React.Suspense>
      )}
    </main>
  )
}
