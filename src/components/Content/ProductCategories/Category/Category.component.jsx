import React from 'react';
import { CategoryView, CategoryImg, CategoryName } from './Category.styles';

const Category = ({ category }) => {
  return (
    <CategoryView>
      <CategoryImg src={category.data.main_image.url} alt="thumbnail" />
      <CategoryName> {category.data.name} </CategoryName>
    </CategoryView>
  );
};

export default Category;
