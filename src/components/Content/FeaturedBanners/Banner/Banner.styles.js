import styled from 'styled-components';

export const BannerView = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: black;
  background-color: #ffffff;
  border-radius: 5px;
  max-width: 100%;
  min-height: 400px;
  margin: 15px;
  flex-direction: column;
  padding: 5px 10px 5px 10px;
`;

export const BannerTextDiv = styled.div`
  max-height: 370px;
  border-radius: 5px 5px 0 0;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const BannerImg = styled.img`
  max-height: 370px;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
`;

export const BannerText = styled.h1`
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.9);
  text-align: center;
  font-size: 2em;
`;