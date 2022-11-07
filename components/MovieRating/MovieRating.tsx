import CountUp from 'react-countup';
import { Star } from 'phosphor-react';

import Heading from 'components/Heading';

type MovieRatingProps = {
  rating: number;
};

function MovieRating({ rating = 0.0 }: MovieRatingProps) {
  return (
    <div className="flex items-center justify-end gap-2">
      <Star size={20} weight="bold" className="text-accent-orange" />
      <Heading className="font-bold text-right">
        <CountUp end={rating} decimals={1} />
      </Heading>
    </div>
  );
}

export default MovieRating;
