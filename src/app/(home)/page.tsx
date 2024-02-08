import { MovieHero } from '@/_components/movie-hero'
import { getFeaturedMovie } from '@/_lib/tmdb-api/services'

import { NowPlayingList } from './_components/now-playing-list'

interface Props {
  searchParams: {
    page?: string
  }
}

export default async function Home({ searchParams }: Props) {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1
  const featuredMovie = await getFeaturedMovie()

  return (
    <main id="home" role="main" className="flex flex-1 flex-col gap-10">
      {featuredMovie && <MovieHero movie={featuredMovie} />}

      <h3 className="text-xl font-medium">Filmes em cartaz</h3>

      <NowPlayingList currentPage={currentPage} />
    </main>
  )
}
