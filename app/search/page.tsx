import type { Metadata } from 'next'

import React from 'react'

import { MoviesGridSkeleton } from '@/_components/movies-grid-skeleton'

import { FoundMovies } from './_compoenents/found-movies'
import { SearchInput } from './_compoenents/search-input'

interface Props {
  searchParams: {
    q?: string
  }
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  // read route params
  const query = searchParams.q

  if (!query) {
    return {}
  }

  return {
    title: `Procurando por ${query}`,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
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
          <FoundMovies query={query} />
        </React.Suspense>
      )}
    </main>
  )
}
