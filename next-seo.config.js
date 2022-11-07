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
        url: 'https://that-movie.vercel.app/og.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;
