import React from 'react';
import { CardView } from './Category.styles';

const Category = ({ category }) => {
  return (
    <CardView>
      <img src={category.data.main_image.url} alt="thumbnail"></img>
      <h2> {category.data.name} </h2>
    </CardView>
  );
};

export default Category;
