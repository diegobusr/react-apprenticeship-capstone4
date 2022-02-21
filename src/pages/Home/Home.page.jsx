import React from 'react';
import Content from '../../components/Content';
import FeaturedProducts from '../../components/Content/FeaturedProducts';
import ProductCategories from '../../components/Content/ProductCategories';
import FeaturedBanners from '../../components/Content/FeaturedBanners';
import { HomeDiv } from './Home.styles';

const HomePage = () => {
  return (
    <HomeDiv>
      <Content>
        <FeaturedBanners />
        <ProductCategories />
        <FeaturedProducts />
      </Content>
    </HomeDiv>
  );
};

export default HomePage;
