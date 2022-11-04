import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';

import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

import { IMovie } from 'lib/tmdbAPI';

import Page from 'components/Page';
import Heading from 'components/Heading';
import { Text } from 'components/Text';

import { MovieList } from 'components/MovieList';

type WatchlistProps = {
  watchlist: IMovie[];
};

const WatchListPage: NextPage<WatchlistProps> = ({ watchlist }) => {
  return (
    <Page title="WatchList" description="Remember the movies that touched your heart the most" path="/watchList">
      <header className="flex flex-col gap-4">
        <Heading size="md">WatchList</Heading>

        <Text asChild size="sm" className="w-full md:max-w-xl text-gray-300">
          <p>
            How good it is to relive good moments in front of the small screen... Come review your watchlist and
            remember the movies that touched your heart the most.
          </p>
        </Text>
      </header>

      <MovieList movies={watchlist} />
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps<WatchlistProps> = async (ctx: GetServerSidePropsContext) => {
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const { data } = await supabase.from('watchlist').select('*').eq('user_id', session.user.id);

  return {
    props: {
      watchlist: data as IMovie[],
    },
  };
};

export default WatchListPage;
