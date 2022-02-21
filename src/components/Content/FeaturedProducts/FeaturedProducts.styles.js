import styled from 'styled-components';

export const FeatureProductsDiv = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: repeat(6, 1fr);
  justify-content: space-evenly;
  align-items: center;
`;

export const FeatureProductsTitleDiv = styled.div`
  width: 90%;
  margin: 50px 0 25px 0;
`;

export const FeatureProductsTitle = styled.h2`
  text-align: start;
  border-bottom: 10px solid #ffe000;
  line-height: 0.1em;
  font-weight: bold;
  font-size: 2em;
`;

export const FeatureProductsTitleline = styled.span`
  color: #0945be;
  background: #fff;
  padding: 0 10px;
`;
