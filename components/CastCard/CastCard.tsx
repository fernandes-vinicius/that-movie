import Image from 'next/image';

import { ICast, imagesUrl } from 'lib/tmdbAPI';

import Text from 'components/Text';

type CastCardProps = {
  cast: ICast;
};

function CastCard({ cast }: CastCardProps) {
  return (
    <div className="relative bg-gray-800 h-full rounded-lg overflow-hidden text-center">
      <div className="relative min-h-[300px] rounded-b-0 border-b border-gray-700 overflow-hidden">
        <Image
          src={cast.profile_path ? `${imagesUrl}${cast.profile_path}` : '/images/default-cast.svg'}
          alt={cast.name}
          layout="fill"
          objectFit="cover"
          sizes="100%"
          priority
          placeholder="blur"
          blurDataURL="/images/default-cast.svg"
          quality={100}
          style={{
            gridArea: 'image',
          }}
        />
      </div>

      <Text asChild size="md" className="font-medium text-white pt-2 px-4 overflow-hidden whitespace-nowrap">
        <p className="text-ellipsis">{cast.name || 'Unknown'}</p>
      </Text>

      <Text asChild size="sm" className="text-gray-300 pb-2 px-4 overflow-hidden whitespace-nowrap">
        <p className="text-ellipsis">{cast.character || 'Unknown'}</p>
      </Text>
    </div>
  );
}

export default CastCard;
