import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { Info } from 'phosphor-react';

import tmdbAPI, { ResponseType, IMovie } from 'lib/tmdbAPI';

import Page from 'components/Page';
import Button from 'components/Button';
import Heading from 'components/Heading';
import { MovieHero } from 'components/MovieHero';
import { MovieList } from 'components/MovieList';
import { Pagination } from 'components/Pagination';
import { ButtonAddToWatchlist } from 'components/ButtonAddToWatchlist';

type HomePageProps = {
  featuredMovie: IMovie;
  popularMovies: ResponseType<IMovie>;
};

const HomePage: NextPage<HomePageProps> = (props) => {
  const { featuredMovie, popularMovies } = props;

  const router = useRouter();
  const currentPage = Number(router.query.page) || 1;

  const handlePageChange = (page: number) => {
    router.push({ pathname: router.pathname, query: { page: page + 1 } });
  };

  const handleNavigate = (url: string) => {
    router.push(url);
  };

  return (
    <Page path="/">
      <MovieHero
        movie={featuredMovie}
        actions={
          <>
            <ButtonAddToWatchlist key="add watchlist" movie={featuredMovie} />

            <Button
              key="more info"
              variant="secondary"
              icon={<Info weight="bold" />}
              onClick={() => handleNavigate(`/movie/${featuredMovie.id}`)}
            >
              More Info
            </Button>
          </>
        }
      />

      <Heading>Popular</Heading>

      <MovieList movies={popularMovies.results} />

      <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({ query }) => {
  const page = Number(query.page) || 1;

  const featuredMovie = await tmdbAPI.featuredMovie();
  const popularMovies = await tmdbAPI.popularMovies(page);

  return {
    props: {
      featuredMovie,
      popularMovies,
    },
  };
};

export default HomePage;
