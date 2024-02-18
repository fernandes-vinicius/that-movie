import React from 'react'

import { MovieHeroSkeleton } from '@/_components/movie-hero-skeleton'
import { MoviesGridSkeleton } from '@/_components/movies-grid-skeleton'

import { FeaturedMovie } from './_components/featured-movie'
import { NowPlayingList } from './_components/now-playing-list'

interface Props {
  searchParams: {
    page?: string
  }
}

export default function Home({ searchParams }: Props) {
  const currentPage = Number(searchParams.page) || 1

  return (
    <main id="home" role="main" className="flex flex-1 flex-col gap-10">
      <React.Suspense fallback={<MovieHeroSkeleton />}>
        <FeaturedMovie />
      </React.Suspense>

      <h3 className="text-xl font-medium">Filmes em cartaz</h3>

      <React.Suspense key={currentPage} fallback={<MoviesGridSkeleton />}>
        <NowPlayingList currentPage={currentPage} />
      </React.Suspense>
    </main>
  )
}
