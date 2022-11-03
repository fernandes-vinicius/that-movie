import { Star } from 'phosphor-react';

import Heading from 'components/Heading';

type MovieRatingProps = {
  value: number;
};

export function MovieRating({ value = 0.0 }: MovieRatingProps) {
  const rating = value.toFixed(1).replace('.', ',');

  return (
    <div className="flex items-center justify-end gap-2">
      <Star size={20} weight="bold" className="text-accent-orange" />
      <Heading className="font-bold text-right">{rating}</Heading>
    </div>
  );
}
