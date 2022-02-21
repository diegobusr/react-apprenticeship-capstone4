import React from 'react';
import {
  BannerView,
  BannerImg,
  BannerTextDiv,
  BannerText,
} from './Banner.styles';

const Banner = ({ banner }) => {
  return (
    <BannerView>
      <BannerImg src={banner.data.main_image.url} alt="banner"></BannerImg>
      <BannerTextDiv>
        <BannerText>{banner.data.title}</BannerText>
      </BannerTextDiv>
    </BannerView>
  );
};

export default Banner;
