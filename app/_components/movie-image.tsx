'use client'

import Image, { type ImageProps } from 'next/image'

import React, { useState } from 'react'

export function MovieImage({ src, alt, ...props }: ImageProps) {
  const [imageSrc, setImageSrc] = useState(src)

  return (
    <Image
      {...props}
      src={imageSrc}
      alt={alt || 'Poster do filme'}
      priority
      quality={100}
      width={300}
      height={450}
      placeholder="blur"
      blurDataURL="/movie-placeholder.svg"
      onError={() => setImageSrc('/movie-placeholder.svg')}
      className="max-h-[750px] w-full rounded-xl bg-neutral-900 object-cover"
    />
  )
}
