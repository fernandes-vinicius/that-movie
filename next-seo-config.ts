import { DefaultSeoProps } from 'next-seo';

const title = 'THATMOVIE';
const description = 'Browse, Find Ratings, Check Actors and Find you next movie to watch';

const SEO: DefaultSeoProps = {
  title,
  description,
  canonical: 'https://that-movie.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://that-movie.vercel.app',
    images: [
      {
        url: 'https://that-movie.vercel.app/og.png',
        alt: title,
        width: 12080,
        height: 720,
      },
    ],
  },
};

export default SEO;
