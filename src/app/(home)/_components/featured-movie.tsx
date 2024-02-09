import { MovieHero } from '@/_components/movie-hero'
import { getFeaturedMovie } from '@/_lib/tmdb-api/services'

export async function FeaturedMovie() {
  const featuredMovie = await getFeaturedMovie()

  if (!featuredMovie) {
    return null
  }

  return <MovieHero movie={featuredMovie} />
}
