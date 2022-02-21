import React from 'react';
import {
  ProductView,
  ProductName,
  ProductImg,
  ProductCategory,
  ProductPrice,
} from './Product.styles';

const Product = ({ product }) => {
  return (
    <ProductView>
      <ProductImg src={product.data.mainimage.url} alt="product"></ProductImg>
      <ProductName> {product.data.name} </ProductName>
      <ProductCategory>
        <strong>Category: </strong> {product.data.category.slug}
      </ProductCategory>
      <ProductPrice> ${product.data.price}</ProductPrice>
    </ProductView>
  );
};

export default Product;
