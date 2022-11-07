import { useRouter } from 'next/router';
import { Heart } from 'phosphor-react';
import { toast } from 'react-toastify';
import useSWR, { useSWRConfig } from 'swr';

import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

import { IMovie } from 'lib/tmdbAPI';

import Button from 'components/Button';

type AddMovieTowatchlistValues = {
  poster_path: string | null;
  backdrop_path: string | null;
  movie_id: number;
  user_id: string;
};

type WatchlistButtonProps = {
  movie: IMovie;
};

function WatchlistButton({ movie }: WatchlistButtonProps) {
  const router = useRouter();

  const user = useUser();
  const supabaseClient = useSupabaseClient();

  const getwatchlist = async (userId: string) => {
    const response = await supabaseClient.from('watchlist').select('*').eq('user_id', userId);
    return response.data as IMovie[];
  };

  const addMovieTowatchlist = async (values: AddMovieTowatchlistValues) => {
    const response = await supabaseClient.from('watchlist').insert(values);
    return response;
  };

  const removeMovieFromwatchlist = async (movieId: number) => {
    const response = await supabaseClient.from('watchlist').delete().eq('movie_id', movieId);
    return response;
  };

  const { mutate } = useSWRConfig();
  const { data: watchlist, isValidating } = useSWR(user?.id, getwatchlist, { revalidateOnFocus: false });

  const isInwatchlist = !!user && !!watchlist?.some((item) => item.movie_id === movie.id);

  const handleAdd = async () => {
    if (!user) return;

    const values = {
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
      movie_id: movie.id,
      user_id: user.id,
    } as AddMovieTowatchlistValues;

    const { error } = await addMovieTowatchlist(values);

    if (error) toast.error(error.message);
    else {
      toast.success(`We've added the movie to your watchlist! 🔥`);
      mutate(user.id);
    }
  };

  const handleRemove = async () => {
    if (!user) return;

    const { error } = await removeMovieFromwatchlist(movie.id);

    if (error) toast.error(error.message);
    else {
      toast.success(`We've removed the movie to your watchlist! 👍`);
      mutate(user.id);
    }
  };

  const handleClick = () => {
    if (!user) router.push('/login');
    else if (isInwatchlist) handleRemove();
    else handleAdd();
  };

  return (
    <Button icon={<Heart weight="bold" />} onClick={handleClick} disabled={isValidating}>
      {isInwatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
    </Button>
  );
}

export default WatchlistButton;
