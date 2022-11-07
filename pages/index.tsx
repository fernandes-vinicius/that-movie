import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import tmdbAPI, { ResponseType, IMovie } from 'lib/tmdbAPI';

import Page from 'components/Page';
import Heading from 'components/Heading';
import MovieHero from 'components/MovieHero';
import MovieList from 'components/MovieList';
import Pagination from 'components/Pagination';

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

  return (
    <Page path="/">
      <MovieHero movie={featuredMovie} />

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
