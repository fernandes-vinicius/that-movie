import { Star } from 'phosphor-react';

import Heading from 'components/Heading';

type MovieRatingProps = {
  rating: number;
};

function MovieRating({ rating = 0.0 }: MovieRatingProps) {
  const movieRating = rating.toFixed(1).replace('.', ',');

  return (
    <div className="flex items-center justify-end gap-2">
      <Star size={20} weight="bold" className="text-accent-orange" />
      <Heading className="font-bold text-right">{movieRating}</Heading>
    </div>
  );
}

export default MovieRating;
