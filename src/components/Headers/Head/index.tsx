import React from 'react';
import HeadNext from 'next/head';
import { HeadProps } from '../../../types';

const Head: React.FC<HeadProps> = ({
  title,
  description,
  keywords,
}: HeadProps) => {
  return (
    <HeadNext>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="title" content={title} />
      <meta name="author" content="http://wule.com.br/" />
      <meta name="robots" content="all" />
      <meta name="geo.position" content="geoLatitude;geoLongitude" />
      <meta name="ICBM" content="geoLatitude, geoLongitude" />
      <meta name="language" content="pt-br" />
      <meta name="copyright" content={description} />
      <meta name="distribution" content="global" />
      <meta name="audience" content="all" />
      <meta name="url" content="https://www.carpede.com/" />
      <meta name="classNameification" content="applications" />
      <meta name="category" content="applications" />
      <meta name="rating" content="general" />
      <meta name="fone" content="tel" />
      <meta name="city" content="Distrito Federal, Brasília" />
      <meta name="country" content="Brasil" />
      <meta property="publisher" content="Wule Agência Digital" />
      <meta name="googlebot" content="all" />
      <meta name="geo.placename" content="Brasil" />
      <meta name="geo.region" content="Distrito Federal, Brasília" />
      <meta name="name" content="Carpede" />
      <meta name="twitter:site" content="https://www.carpede.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Carpede" />
      <meta property="og:author" content="Carpede" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:region" content="Brasil" />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="250" />
      <meta property="og:image:height" content="250" />
      <link rel="icon" href="source/images/favicon.png" type="image/x-icon" />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="source/images/favicon.png"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="Page-Topic" content={title} />
      <link rel="canonical" href="https://www.carpede.com/" />
      <meta name="image" content="https://www.carpede.com/images/card.jpg" />
      <meta
        name="twitter:card"
        content="https://www.carpede.com/images/card.jpg"
      />
      <meta name="twitter:url" content="https://www.carpede.com/" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://www.carpede.com/images/card.jpg"
      />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://www.carpede.com/" />
      <meta
        property="og:image"
        content="https://www.carpede.com/images/card.jpg"
      />
      <meta property="og:description" content={description} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;900&display=swap"
        rel="stylesheet"
      />
    </HeadNext>
  );
};

export default Head;
