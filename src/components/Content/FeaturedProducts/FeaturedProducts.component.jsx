import React from 'react';
import useFetch from '../../../utils/hooks/useFetch';
import Product from './Product';
import Loading from '../Loading';
import { FeatureProductsDiv } from './FeaturedProducts.styles';

const FeatureProducts = () => {
  const { data: products, loading: isLoading } = useFetch(
    './featured-products.json',
    'results'
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FeatureProductsDiv>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </FeatureProductsDiv>
  );
};

export default FeatureProducts;
