import styled from 'styled-components';

export const ProductView = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  color: black;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  min-width: 300px;
  min-height: 530px;
  margin: 10px;
  flex-direction: column;
  padding: 5px 10px 5px 10px;

  :hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

export const ProductImg = styled.img`
  height: 350px;
  width: 100%;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
`;
export const ProductName = styled.h2`
  color: black;
  min-height: 30px;
  font-size: 0.9em;
`;
export const ProductCategory = styled.span`
  max-width: 90%;
  margin-bottom: 10px;
  font-size: 0.8em;
  color: #757575;
`;
export const ProductPrice = styled.h1`
  text-align: end;
  color: black;
  min-height: 30px;
  font-size: 1.3em;
`;
