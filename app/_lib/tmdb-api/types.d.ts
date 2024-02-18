export interface Genre {
  id: number
  name: string
}

export interface Cast {
  id: number
  name: string
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
}

export interface Movie {
  // adult: boolean,
  budget: number
  revenue: number
  genres?: Genre[]
  id: number
  overview: string
  poster_path: string
  release_date?: string
  runtime?: number
  title: string
  vote_average: number
  vote_count: number
  credits?: {
    cast: Cast[]
  }
}

export interface ApiPaginationResponse<T> {
  results: T[]
  total_pages: number
}
