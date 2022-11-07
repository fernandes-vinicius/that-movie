import Slider, { Settings } from 'react-slick';

import { ICast } from 'lib/tmdbAPI';

import CastCard from 'components/CastCard';

type CastListProps = {
  cast: ICast[];
};

const settings: Settings = {
  // centerMode: true,
  // className: 'center',
  // centerPadding: '48px',
  infinite: false,
  speed: 500,
  adaptiveHeight: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function CastList({ cast }: CastListProps) {
  return (
    <Slider {...settings} className="mx-6">
      {cast.map((item) => (
        <div key={item.id} className="px-2 overflow-hidden">
          <CastCard key={item.id} cast={item} />
        </div>
      ))}
    </Slider>
  );
}

export default CastList;
