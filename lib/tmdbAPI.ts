import axios from 'axios';

export type ResponseType<T = any> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export interface IGenrer {
  id: number;
  name: string;
}

export interface IMovie {
  id: number;
  movie_id: number | null;
  poster_path: string | null;
  overview: string | null;
  release_date: string | Date;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  vote_average: number;
  // budget?: number;
  genres?: IGenrer[];
  // revenue?: number;
  runtime?: number | null;
  tagline?: string | null;
}

export interface ICast {
  id: number;
  name: string;
  character: string;
  // popularity: number;
  profile_path: string | null;
}

export interface ICredit {
  id: number;
  cast: ICast[];
}

export interface IMovieImages {
  aspect_ratio: number;
  file_path: string;
  height: number;
  // iso_639_1: string | null;
  // vote_average: number;
  // vote_count: number;
  width: number;
}

export const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
export const apiBaseUrl = process.env.NEXT_PUBLIC_TMBD_API_BASE_URL;
export const imagesUrl = {
  small: `${process.env.NEXT_PUBLIC_TMDB_IMAGES_URL}/w185`,
  medium: `${process.env.NEXT_PUBLIC_TMDB_IMAGES_URL}/w300`,
  large: `${process.env.NEXT_PUBLIC_TMDB_IMAGES_URL}/w1280`,
  original: `${process.env.NEXT_PUBLIC_TMDB_IMAGES_URL}/original`,
};

const language = 'pt-BR'; // TODO - Internationalization (i18n)

const tmdbAPI = {
  featuredMovie: async () => {
    const popularMovies = await tmdbAPI.popularMovies(1);
    const movie = await tmdbAPI.movie(popularMovies.results[0].id);
    return movie;
  },

  popularMovies: async (page = 1) => {
    const uri = `${apiBaseUrl}/movie/popular?api_key=${apiKey}&language=${language}&page=${page}`;
    const res = await axios<ResponseType<IMovie>>(uri);
    return res.data;
  },

  movie: async (id: number) => {
    const uri = `${apiBaseUrl}/movie/${id}?api_key=${apiKey}&language=${language}&append_to_response=images,credits,genres`;
    const res = await axios<IMovie>(uri);
    return res.data;
  },

  search: async (query: string, page = 1) => {
    const uri = `${apiBaseUrl}/search/multi?api_key=${apiKey}&language=${language}&query=${query}&page=${page}&include_adult=true`;
    const res = await axios<ResponseType<IMovie>>(uri);
    return res.data.results;
  },

  recommendations: async (movieId: number, page = 1) => {
    const uri = `${apiBaseUrl}/movie/${movieId}/recommendations?api_key=${apiKey}&language=${language}&page=${page}`;
    const res = await axios<ResponseType<IMovie>>(uri);
    return res.data;
  },

  credits: async (movieId: number) => {
    const uri = `${apiBaseUrl}/movie/${movieId}/credits?api_key=${apiKey}&language=${language}`;
    const res = await axios<ICredit>(uri);
    return res.data;
  },

  getMovieImages: async (movieId: number) => {
    const uri = `${apiBaseUrl}/movie/${movieId}/images?api_key=${apiKey}`;
    const res = await axios<{ backdrops: IMovieImages[] }>(uri);
    return res.data.backdrops;
  },
};

export default tmdbAPI;
