import styled from 'styled-components';

export const CardView = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  color: black;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  max-width: 86%;
  min-height: 205px;
  margin: 15px;
  flex-direction: column;
  padding: 5px 10px 5px 10px;

  img {
    height: 145px;
    width: 100%;
    border-radius: 5px 5px 0 0;
    object-fit: cover;
  }

  h2 {
    color: black;
    text-align: center;
    min-height: 30px;
    font-size: 1em;
  }
`;
