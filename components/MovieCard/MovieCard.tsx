import Image from 'next/image';
import clsx from 'clsx';

import { imagesUrl } from 'lib/tmdbAPI';

type MovieCardProps = {
  image: string | null;
  alt?: string;
  disabledElevation?: boolean;
};

function MovieCard(props: MovieCardProps) {
  const { image, alt, disabledElevation } = props;

  const elevation = !disabledElevation;

  return (
    <div
      className={clsx('bg-gray-800 relative overflow-hidden rounded-lg shadow-lg', {
        'hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300': elevation,
      })}
    >
      <Image
        src={image ? `${imagesUrl.large}${image}` : '/images/default-movie.svg'}
        alt={alt || 'Poster of the movie'}
        layout="responsive"
        objectFit="cover"
        width={300}
        height={400}
        sizes="100%"
        priority
        placeholder="blur"
        blurDataURL="/images/default-movie.svg"
        quality={100}
        style={{
          gridArea: 'image',
        }}
      />
    </div>
  );
}

export default MovieCard;
