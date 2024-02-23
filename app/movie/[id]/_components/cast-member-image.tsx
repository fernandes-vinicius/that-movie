/* eslint-disable @next/next/no-img-element */

'use client'

// import Image, { type ImageProps } from 'next/image'

import React, { useState } from 'react'

type CastMemberImageProps = React.ComponentProps<'img'>

export function CastMemberImage({ src, alt, ...props }: CastMemberImageProps) {
  const [imageSrc, setImageSrc] = useState(src)

  return (
    <img
      {...props}
      src={imageSrc}
      alt={alt || 'Poster do filme'}
      width={200}
      height={300}
      onError={() => setImageSrc('/cast-placeholder.svg')}
      className="min-h-[300px] w-full rounded-xl bg-neutral-900 object-cover"
    />

    // !Image optimization has been disabled to avoid costs at Vercel.
    // <Image
    //   {...props}
    //   src={imageSrc}
    //   alt={alt || 'Poster do filme'}
    //   priority
    //   quality={100}
    //   width={200}
    //   height={300}
    //   placeholder="blur"
    //   blurDataURL="/cast-placeholder.svg"
    //   onError={() => setImageSrc('/cast-placeholder.svg')}
    //   className="min-h-[300px] w-full rounded-xl bg-neutral-900 object-cover"
    // />
  )
}
