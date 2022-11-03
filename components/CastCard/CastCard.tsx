import Image from 'next/image';

import { ICast, imagesUrl } from 'lib/tmdbAPI';

import { Text } from 'components/Text';

type CastCardProps = {
  cast: ICast;
};

export function CastCard({ cast }: CastCardProps) {
  return (
    <div className="relative bg-gray-800 h-full rounded-lg overflow-hidden text-center">
      <div className="relative h-[300px] block rounded-lg overflow-hidden border-[2px] border-gray-300 border-opacity-10">
        <Image
          src={cast.profile_path ? `${imagesUrl.small}${cast.profile_path}` : '/images/defaultCast.svg'}
          alt="Profile photo"
          layout="fill"
          width={138}
          height={175}
          sizes="100%"
        />
      </div>

      <Text asChild size="md" className="font-medium text-white overflow-hidden text-ellipsis pt-2 px-2">
        <p>{cast.name}</p>
      </Text>

      <Text asChild size="sm" className="text-gray-300 overflow-hidden text-ellipsis pb-2 px-2">
        <p>{cast.character}</p>
      </Text>
    </div>
  );
}
