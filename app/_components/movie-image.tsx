/* eslint-disable @next/next/no-img-element */

'use client'

// import Image, { type ImageProps } from 'next/image'

import React, { useState } from 'react'

type MovieImageProps = React.ComponentProps<'img'>

export function MovieImage({ src, alt, ...props }: MovieImageProps) {
  const [imageSrc, setImageSrc] = useState(src)

  return (
    <img
      {...props}
      src={imageSrc}
      alt={alt || 'Poster do filme'}
      width={300}
      height={450}
      onError={() => setImageSrc('/movie-placeholder.svg')}
      className="max-h-[750px] w-full rounded-xl bg-neutral-900 object-cover"
    />

    // !Image optimization has been disabled to avoid costs at Vercel.
    // <Image
    //   {...props}
    //   src={imageSrc}
    //   alt={alt || 'Poster do filme'}
    //   priority
    //   quality={100}
    //   width={300}
    //   height={450}
    //   placeholder="blur"
    //   blurDataURL="/movie-placeholder.svg"
    //   onError={() => setImageSrc('/movie-placeholder.svg')}
    //   className="max-h-[750px] w-full rounded-xl bg-neutral-900 object-cover"
    // />
  )
}
