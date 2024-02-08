import Image, { type ImageProps } from 'next/image'

import React from 'react'

type Props = ImageProps

export function MovieImage({ src, alt }: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      priority
      quality={100}
      width={300}
      height={450}
      className="max-h-[750px] w-full rounded-xl bg-neutral-900 object-cover"
    />
  )
}