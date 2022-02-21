import styled from 'styled-components';

export const CategoryView = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: black;
  background-color: #ffffff;
  border-radius: 5px;
  max-width: 86%;
  min-height: 130px;
  margin: 15px;
  flex-direction: column;
  padding: 5px 10px 5px 10px;
`;

export const CategoryImg = styled.img`
  height: 100px;
  width: 100%;
  border-radius: 5px 5px 5px 5px;
  object-fit: cover;
`;

export const CategoryName = styled.span`
  color: black;
  font-weight: bold;
  text-align: center;
  font-size: 1.2em;
  margin-top: 5px;
`;
