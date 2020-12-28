import React from 'react';
import { BannerContainer, BannerTitle, Image } from './BannerStyles';

function Banner({ src, title }) {
  return (
    <BannerContainer>
      <Image src={src} alt="banner-image" />
      <BannerTitle>{title}</BannerTitle>
    </BannerContainer>
  );
}

export default Banner;
