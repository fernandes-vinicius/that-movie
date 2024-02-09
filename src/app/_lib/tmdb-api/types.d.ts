export interface Genre {
  id: number
  name: string
}

export interface Movie {
  // adult: boolean,
  backdrop_path: string
  genre_ids: number[]
  genres?: Genre[]
  id: number

  // original_language: 'en',
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  runtime?: number
  title: string
  vote_average: number
  vote_count: number
}

export interface ApiResponse<T> {
  results: T[]
  total_pages: number
}
