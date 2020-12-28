import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { BannerTitle } from './BannerStyles';

function Banner({ img, title = 'default', styleClass = 'default-background' }) {
  return (
    <BackgroundImage fluid={img} className={styleClass} alt="banner-image">
      <BannerTitle>{title}</BannerTitle>
    </BackgroundImage>
  );
}

export default Banner;
