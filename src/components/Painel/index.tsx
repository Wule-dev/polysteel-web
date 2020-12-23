import React from 'react';
import Slider from 'react-slick';
import { PainelProps } from '../../types';

const Painel: React.FC<PainelProps> = ({
  children,
  autoplay = false,
  controls = false,
  dots = false,
  items,
  title,
  persClass,
}: PainelProps) => {
  const settings = {
    dots,
    infinite: true,
    arrows: controls,
    speed: 500,
    slidesToShow: items,
    slidesToScroll: items,
    autoplay,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`container painel ${persClass}`}>
      {!title ? '' : <h2>{title}</h2>}
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Painel;
