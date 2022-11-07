import { GetServerSideProps, NextPage } from 'next';

import tmdbAPI, { ICredit, IMovie, IMovieImages, ResponseType } from 'lib/tmdbAPI';

import Page from 'components/Page';
import Heading from 'components/Heading';
import MovieHero from 'components/MovieHero';
import MovieList from 'components/MovieList';
import CastList from 'components/CastList';
import MovieGallery from 'components/MovieGallery';

type MoviePageProps = {
  movie: IMovie;
  credits: ICredit;
  movieImages: IMovieImages[];
  recommendations: ResponseType<IMovie>;
};

const MoviePage: NextPage<MoviePageProps> = (props) => {
  const { movie, credits, movieImages, recommendations } = props;

  return (
    <Page title={movie?.title} description={movie?.overview!} path={`/${movie.id}`}>
      <MovieHero movie={movie} />

      {/* //* cast */}
      {credits.cast.length > 0 && (
        <>
          <Heading>Cast</Heading>
          <CastList cast={credits.cast} />
        </>
      )}

      {/* //* gallery */}
      {movieImages.length > 0 && (
        <>
          <Heading>Gallery</Heading>
          <MovieGallery images={movieImages} />
        </>
      )}

      {/* //* recommendations */}
      {recommendations.total_results > 0 && (
        <>
          <Heading>Recommendations</Heading>
          <MovieList movies={recommendations.results} />
        </>
      )}
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps<MoviePageProps> = async ({ params }) => {
  const movieId = Number(params?.id);

  const movie = await tmdbAPI.movie(movieId);
  const credits = await tmdbAPI.credits(movieId);
  const movieImages = await tmdbAPI.getMovieImages(movieId);
  const recommendations = await tmdbAPI.recommendations(movieId);

  return {
    props: {
      movie,
      credits,
      movieImages,
      recommendations,
    },
  };
};

export default MoviePage;
