import { IMovie } from 'lib/tmdbAPI';

import Link from 'components/Link';
import MovieCard from 'components/MovieCard';

type MovieListProps = {
  movies: IMovie[];
};

function MovieList({ movies }: MovieListProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {movies.map((movie) => (
        <li key={movie.id} title={movie.title}>
          <Link href={`/movie/${movie.movie_id ?? movie.id}`}>
            <MovieCard image={movie.poster_path} alt={movie.title} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
