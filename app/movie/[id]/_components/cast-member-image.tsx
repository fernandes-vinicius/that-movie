'use client'

import Image, { type ImageProps } from 'next/image'

import React, { useState } from 'react'

export function CastMemberImage({ src, alt, ...props }: ImageProps) {
  const [imageSrc, setImageSrc] = useState(src)

  return (
    <Image
      {...props}
      src={imageSrc}
      alt={alt || 'Poster do filme'}
      priority
      quality={100}
      width={200}
      height={300}
      placeholder="blur"
      blurDataURL="/cast-placeholder.svg"
      onError={() => setImageSrc('/cast-placeholder.svg')}
      className="min-h-[300px] w-full rounded-xl bg-neutral-900 object-cover"
    />
  )
}
