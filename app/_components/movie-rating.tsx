'use client'

import CountUp from 'react-countup'

import { StarIcon } from 'lucide-react'

interface Props {
  rating: number
}

export function MovieRating({ rating = 0 }: Props) {
  return (
    <div className="flex items-center gap-2">
      <StarIcon className="size-5 fill-current text-amber-400" />
      <span className="text-xl font-medium leading-none">
        <CountUp end={rating} decimals={1} />
      </span>
    </div>
  )
}
