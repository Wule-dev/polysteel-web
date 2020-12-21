import React from 'react';
import Slider from 'react-slick';
import { PainelProps } from '../../types';

const Painel: React.FC<PainelProps> = ({ children }: PainelProps) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="container painel">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Painel;
