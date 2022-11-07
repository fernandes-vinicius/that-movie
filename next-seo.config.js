const title = 'THATMOVIE';
const description = 'Browse, Find Ratings, Check Actors and Find you next movie to watch';

const SEO = {
  title,
  description,
  canonical: 'https://that-movie.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'en',
    url: 'https://that-movie.vercel.app',
    images: [
      {
        url: 'https://raw.githubusercontent.com/fernandes-vinicius/that-movie/main/Thumbnail.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;
