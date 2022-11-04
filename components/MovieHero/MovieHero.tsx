import { useRouter } from 'next/router';
import { Heart, Info } from 'phosphor-react';

import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

import { IMovie } from 'lib/tmdbAPI';
import { formatDate } from 'utils/dateUtils';

import MovieCard from 'components/MovieCard';
import Heading from 'components/Heading';
import Button from 'components/Button';
import { Text } from 'components/Text';
import { MovieRating } from 'components/MovieRating';

type MovieHeroProps = {
  movie: IMovie;
};

export function MovieHero({ movie }: MovieHeroProps) {
  const router = useRouter();
  const queryMovieId = router.query.id;

  const ratingPercent = Math.round(movie.vote_average * 10);
  const durationHours = Math.round(movie?.runtime! / 60);
  const durationMinutes = Math.round(movie?.runtime! % 60);
  const genrerNames = movie.genres?.map((genrer) => genrer.name).join(', ');

  const user = useUser();
  const supabaseClient = useSupabaseClient();

  const handleAddToWatchlist = async () => {
    console.log('handle click');

    if (!user) {
      return router.push('/login');
    }

    if (user) {
      console.log('insert movie');

      const values = {
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
        movie_id: movie.id,
        user_id: user?.id,
      };

      const { data, error } = await supabaseClient.from('watchlist').insert(values);

      console.log('error', error);
      console.log('data', data);
    }
  };

  return (
    <section className="flex flex-col lg:flex-row gap-10">
      <div className="block h-auto min-w-[250px]">
        <MovieCard disabledElevation image={movie.backdrop_path || movie.poster_path} alt={movie.title} />
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

        <div className="flex flex-col md:flex-row gap-6">
          <Button aria-label="add to watchlist" icon={<Heart weight="bold" />} onClick={handleAddToWatchlist}>
            Add to Watchlist
          </Button>

          {/* //* Prevents the navigation button for the movie's detail page from being displayed if the current page is already the detail page. */}
          {Number(queryMovieId) !== movie.id && (
            <Button
              aria-label="more info"
              icon={<Info weight="bold" />}
              variant="secondary"
              onClick={() => router.push(`/movie/${movie.id}`)}
            >
              More Info
            </Button>
          )}
        </div>
      </section>
    </section>
  );
}
