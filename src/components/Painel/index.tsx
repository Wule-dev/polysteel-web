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
}: PainelProps) => {
  const settings = {
    dots,
    infinite: true,
    arrows: controls,
    speed: 500,
    slidesToShow: items,
    slidesToScroll: items,
    autoplay,
    title: title || '',
  };

  return (
    <div className="container painel">
      {title !== '' ? <h2>{title}</h2> : ''}
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default Painel;
