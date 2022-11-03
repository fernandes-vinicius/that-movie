import { ReactNode } from 'react';

import { IMovie } from 'lib/tmdbAPI';

import { MovieCard } from 'components/MovieCard';
import Heading from 'components/Heading';
import { Text } from 'components/Text';

import { MovieRating } from 'components/MovieRating';

import { formatDate } from 'utils/dateUtils';

type MovieHeroProps = {
  movie: IMovie;
  actions?: ReactNode;
};

export function MovieHero(props: MovieHeroProps) {
  const { movie, actions = [] } = props;

  const ratingPercent = Math.round(movie.vote_average * 10);
  const durationHours = Math.round(movie?.runtime! / 60);
  const durationMinutes = Math.round(movie?.runtime! % 60);
  const genrerNames = movie.genres?.map((genrer) => genrer.name).join(', ');

  return (
    <section className="flex flex-col lg:flex-row gap-10">
      <div className="block">
        <MovieCard image={movie.poster_path || movie.backdrop_path} />
      </div>

      <section className="flex flex-col flex-1 gap-10">
        <div className="flex items-center">
          <div className="flex-1">
            <Heading size="lg">{movie.title}</Heading>
            {movie.tagline && (
              <Text size="sm" className="inline-block mt-1 text-left text-gray-400">
                {movie.tagline}
              </Text>
            )}
          </div>

          <MovieRating value={movie.vote_average} />
        </div>

        {movie.overview && (
          <Text asChild className="text-gray-300">
            <p>{movie.overview}</p>
          </Text>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {movie.vote_average > 0 && (
            <Text size="sm" className="text-accent-green font-medium">{`${ratingPercent}% relevant`}</Text>
          )}

          <Text size="sm" className="text-white">
            {formatDate(movie.release_date)}
          </Text>

          {movie?.runtime! > 0 && (
            <Text size="sm" className="text-white">{`${durationHours}h ${durationMinutes}min`}</Text>
          )}

          {genrerNames && (
            <Text size="sm" className="text-gray-300">
              {genrerNames}
            </Text>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-6">{actions}</div>
      </section>
    </section>
  );
}
