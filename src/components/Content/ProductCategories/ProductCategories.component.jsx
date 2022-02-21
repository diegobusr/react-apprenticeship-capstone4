import React from 'react';
import { SwiperSlide } from 'swiper/react';
import useFetch from '../../../utils/hooks/useFetch';
import Category from './Category';
import Loading from '../Loading';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { ProductCategoriesDiv, SwiperDiv } from './ProductCategories.styles';

const ProductCategories = () => {
  const { data: categories, loading: isLoading } = useFetch(
    './product-categories.json',
    'results'
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <ProductCategoriesDiv>
      <SwiperDiv
        spaceBetween={0}
        slidesPerView={4}
        centeredSlidesBounds={true}
        onSlideChange={() => {}}
        onSwiper={() => {}}
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
