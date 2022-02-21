import React from 'react';
import { SwiperSlide } from 'swiper/react';
import useFetch from '../../../utils/hooks/useFetch';
import Category from './Category';
import Loading from '../Loading';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { ProductCategoriesDiv, SwiperDiv } from './ProductCategories.styles';

const ProductCategories = () => {
  const { data: categories } = useFetch('./product-categories.json', 'results');
  if (!categories) {
    return <Loading />;
  }

  return (
    <ProductCategoriesDiv>
      <SwiperDiv
        spaceBetween={0}
        slidesPerView={4}
        centeredSlidesBounds={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {categories.map((category) => {
          return (
            <SwiperSlide key={category.id}>
              <Category category={category} />
            </SwiperSlide>
          );
        })}
      </SwiperDiv>
    </ProductCategoriesDiv>
  );
};

export default ProductCategories;
