import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  padding: 0;
  object-fit: cover;
`;

export const BannerTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
`;
