import type { ApiPaginationResponse, Genre, Movie } from './types'
import { buildURL } from './utils'

export async function getFeaturedMovie() {
  try {
    const url = buildURL(`/movie/now_playing`)

    const response = await fetch(url, {
      headers: {
        accept: 'application/json',
      },
    })

    const data = await response.json()

    // Assuming top_rated will return at least one movie
    return data.results[0] as Movie
  } catch (error) {
    console.error('Error fetching featured movie:', error)
    return null
  }
}

export async function getGenres() {
  try {
    const url = buildURL(`/genre/movie/list`)

    const response = await fetch(url, {
      headers: {
        accept: 'application/json',
      },
    })

    const data = await response.json()

    return data.genres as Genre[]
  } catch (error) {
    console.error('Error fetching genres:', error)
    return null
  }
}

export async function getNowPlaying(page: number) {
  try {
    const url = buildURL(`/movie/now_playing`, { page })

    const response = await fetch(url, {
      headers: {
        accept: 'application/json',
      },
    })

    const data = await response.json()

    return data as ApiPaginationResponse<Movie>
  } catch (error) {
    console.error('Error fetching now playing movies:', error)
    return null
  }
}

export async function getMovie(movieId: string) {
  try {
    const url = buildURL(`/movie/${movieId}`)

    const response = await fetch(url, {
      headers: {
        accept: 'application/json',
      },
    })

    const data = await response.json()

    return data as Movie
  } catch (error) {
    console.error('Error fetching movie:', error)
    return null
  }
}

export async function searchMovie(query: string) {
  try {
    const url = buildURL(`/search/multi`, { query })

    const response = await fetch(url, {
      headers: {
        accept: 'application/json',
      },
    })

    const data = await response.json()

    return data as ApiPaginationResponse<Movie>
  } catch (error) {
    console.error('Error fetching search results:', error)
    return null
  }
}
