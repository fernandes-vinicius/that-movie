import { env } from '@/_lib/env'

const API_KEY = env.TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const LANGUAGE = 'pt-BR'

type Params = {
  page?: number
}

export function buildURL(path: string, params?: Params) {
  const page = params?.page || 1
  return `${BASE_URL}${path}?api_key=${API_KEY}&language=${LANGUAGE}&page=${page}`
}

export function buildImageUrl(path: string, width = 500) {
  return `https://image.tmdb.org/t/p/w${width}${path}`
}
