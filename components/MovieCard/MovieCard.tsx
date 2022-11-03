import Image from 'next/image';
import clsx from 'clsx';

import { imagesUrl } from 'lib/tmdbAPI';

type MovieCardProps = {
  image: string | null;
  hoverable?: boolean;
};

export function MovieCard(props: MovieCardProps) {
  const { image, hoverable } = props;

  return (
    <div
      className={clsx(
        'min-w-[185px] rounded-lg overflow-hidden bg-gray-800 shadow-xl',
        'cursor-pointer hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300'
      )}
      // className={clsx('relative min-w-[200px] min-h-[300px] rounded-xl overflow-hidden bg-gray-800 shadow-xl', {
      //   'cursor-pointer hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300':
      //     hoverable,
      // })}
    >
      <Image
        src={image ? `${imagesUrl.medium}${image}` : '/images/defaultMovie.svg'}
        alt="Poster of the movie"
        layout="responsive"
        // objectFit="cover"
        priority
        // blurDataURL="/images/defaultMovie.svg"
        // placeholder="blur"
        // quality={100}
        // onError={() => setSrc('/images/defaultMovie.svg')}
        // loading="lazy"
        width={300}
        height={400}
        sizes="100%"
        style={{
          gridArea: 'image',
          // objectFit: 'cover',
        }}
        // className="block max-w-full h-auto hover:cursor-pointer"
        // className="block w-full h-full"
      />
    </div>
  );
}
