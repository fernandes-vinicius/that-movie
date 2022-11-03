import { useState } from 'react';
import { Heart } from 'phosphor-react';
import { toast } from 'react-toastify';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

import { IMovie } from 'lib/tmdbAPI';

import Button from 'components/Button';

type ButtonAddToWatchlistProps = {
  movie: IMovie;
};

export function ButtonAddToWatchlist({ movie }: ButtonAddToWatchlistProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const supabaseClient = useSupabaseClient();

  const handleClick = async () => {
    // const { data: watchlist, error } = await supabaseClient.from('watchlist').select('*');

    const data: Omit<IMovie, 'id' | 'genres' | 'adult'> = {
      movie_id: movie.id,
      backdrop_path: movie.backdrop_path,
      overview: movie.overview,
      popularity: movie.popularity,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      title: movie.title,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count,
      runtime: movie.runtime,
      tagline: movie.tagline,
    };

    const { error } = await supabaseClient.from('watchlist').insert(data);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Success');
    }
  };

  return (
    <Button onClick={handleClick} icon={<Heart weight="bold" />} loading={isSubmitting}>
      Add to Watchlist
    </Button>
  );
}
