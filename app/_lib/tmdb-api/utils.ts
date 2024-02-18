import { env } from '@/_lib/env'

const API_KEY = env.TMDB_API_KEY
const BASE_URL = env.NEXT_PUBLIC_TMDB_API_BASE_URL
const LANGUAGE = env.NEXT_PUBLIC_TMDB_API_LANGUAGE

type Params = {
  page?: number
  query?: string
}

export function buildURL(path: string, params?: Params) {
  const page = params?.page || 1
  const query = params?.query || ''

  return `${BASE_URL}${path}?api_key=${API_KEY}&language=${LANGUAGE}&page=${page}&query=${query}&include_adult=false&append_to_response=images,credits,genres`
}

export function buildImageUrl(path: string, width = 500) {
  return `https://image.tmdb.org/t/p/w${width}${path}`
}
