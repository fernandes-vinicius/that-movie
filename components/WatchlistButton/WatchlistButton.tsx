import { Heart } from 'phosphor-react';
import { toast } from 'react-toastify';
import useSWR, { useSWRConfig } from 'swr';

import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

import { IMovie } from 'lib/tmdbAPI';

import Button from 'components/Button';

type AddMovieToWatchlistValues = {
  poster_path: string | null;
  backdrop_path: string | null;
  movie_id: number;
  user_id: string;
};

type WatchlistButtonProps = {
  movie: IMovie;
};

function WatchlistButton({ movie }: WatchlistButtonProps) {
  const user = useUser();
  const supabaseClient = useSupabaseClient();

  const getWatchlist = async (userId: string) => {
    const response = await supabaseClient.from('watchlist').select('*').eq('user_id', userId);
    return response.data as IMovie[];
  };

  const addMovieToWatchList = async (values: AddMovieToWatchlistValues) => {
    const response = await supabaseClient.from('watchlist').insert(values);
    return response;
  };

  const removeMovieFromWatchList = async (movieId: number) => {
    const response = await supabaseClient.from('watchlist').delete().eq('movie_id', movieId);
    return response;
  };

  const { mutate } = useSWRConfig();
  const { data: watchList, isValidating } = useSWR(user?.id, getWatchlist, { revalidateOnFocus: false });

  const isInWatchList = !!user && !!watchList?.some((item) => item.movie_id === movie.id);

  const handleAdd = async () => {
    if (!user) return;

    const values = {
      poster_path: movie.poster_path,
      backdrop_path: movie.backdrop_path,
      movie_id: movie.id,
      user_id: user.id,
    } as AddMovieToWatchlistValues;

    const { error } = await addMovieToWatchList(values);

    if (error) toast.error(error.message);
    else {
      toast.success(`We've added the movie to your watchlist! 🔥`);
      mutate(user.id);
    }
  };

  const handleRemove = async () => {
    if (!user) return;

    const { error } = await removeMovieFromWatchList(movie.id);

    if (error) toast.error(error.message);
    else {
      toast.success(`We've removed the movie to your watchlist! 👍`);
      mutate(user.id);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <Button icon={<Heart weight="bold" />} onClick={isInWatchList ? handleRemove : handleAdd} disabled={isValidating}>
      {isInWatchList ? 'Remove from watchlist' : 'Add to watchlist'}
    </Button>
  );
}

export default WatchlistButton;
