import Link from 'next/link'

import { InfoIcon } from 'lucide-react'

import { MovieHero } from '@/_components/movie-hero'
import { Button } from '@/_components/ui/button'
import { getFeaturedMovie } from '@/_lib/tmdb-api/services'

export async function FeaturedMovie() {
  const featuredMovie = await getFeaturedMovie()

  if (!featuredMovie) {
    return null
  }

  return (
    <MovieHero
      movie={featuredMovie}
      action={
        <Button asChild type="button" size="lg">
          <Link
            href={`/movie/${featuredMovie.id}`}
            aria-label={featuredMovie.title}
          >
            <InfoIcon className="size-4" />
            <span>Saiba mais</span>
          </Link>
        </Button>
      }
    />
  )
}
