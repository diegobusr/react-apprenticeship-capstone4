import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { useFeaturedBanners } from '../../../utils/hooks/useFeaturedBanners';
import Banner from './Banner';
import Loading from '../Loading';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { SliderDiv, SwiperDiv } from './FeaturedBanners.styles';

SwiperCore.use([EffectCoverflow, Pagination]);

const FeaturedBanners = () => {
  const { data, isLoading } = useFeaturedBanners();

  if (isLoading) {
    return <Loading />;
  }

  const featuredBanners = data.results;

  return (
    <SliderDiv>
      <SwiperDiv
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        centeredSlides={true}
        direction="horizontal"
        enabled={true}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => {}}
        onSwiper={() => {}}
        effect={'coverflow'}
      >
        {featuredBanners.map((banner) => {
          return (
            <SwiperSlide key={banner.id}>
              <Banner banner={banner} />
            </SwiperSlide>
          );
        })}
      </SwiperDiv>
    </SliderDiv>
  );
};

export default FeaturedBanners;
