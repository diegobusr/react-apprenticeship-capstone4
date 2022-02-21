import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const ProductCategoriesDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const SwiperDiv = styled(Swiper)`
  width: 100%;
  :hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;
