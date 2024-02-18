import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/_components/ui/carousel'
import type { Cast } from '@/_lib/tmdb-api/types'
import { buildImageUrl } from '@/_lib/tmdb-api/utils'

import { CastMemberImage } from './cast-member-image'

interface Props {
  cast: Cast[]
}

export function MainCast({ cast }: Props) {
  return (
    <Carousel opts={{ align: 'start' }} className="w-full">
      <CarouselContent>
        {cast.map((member, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <div className="overflow-hidden rounded-lg bg-neutral-900">
                <div className="flex aspect-square flex-col items-center justify-center gap-2 p-6">
                  <CastMemberImage
                    src={buildImageUrl(member.profile_path)}
                    alt={member.name}
                  />

                  <div className="flex w-full flex-col truncate text-left">
                    <span className="truncate font-medium">{member.name}</span>
                    <span className="truncate text-sm text-neutral-400">
                      {member.character}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
