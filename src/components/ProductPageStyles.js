import styled from 'styled-components';
import Img from 'gatsby-image';
import { Button } from './globalStyle';
import { CgShoppingCart } from 'react-icons/cg';

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 75%;

  @media (max-width: 1080px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
  }
`;

export const ProductName = styled.h1`
  font-size: 38px;
`;

export const ProductInfo = styled.div`
  flex: 0.8;
  margin: 20px;
  text-align: right;
  display: flex;
  flex-direction: column;
`;

export const ProductPriceContainer = styled.div`
  padding: 20px 10px;
  width: 35%;
  align-self: flex-end;
  text-align: center;
  margin: 10px 0;
  border-radius: 20px;
  border: 1px dashed #f7a4a4;

  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 390px) {
    width: 100%;
  }
`;

export const ProductPrice = styled.span`
  font-size: 24px;
  font-weight: 800;

  &:after {
    content: '€';
  }
`;

export const ProductPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const AddToCart = styled(Button)`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0 1rem;

    & span {
      display: none;
    }
  }
`;

export const CartIcon = styled(CgShoppingCart)`
  font-size: 20px;
  margin: 5px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const ProductImage = styled(Img)`
  width: 50%;
  max-height: 326px;
  max-width: 326px;
  border-radius: 20px;
  box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const MobileFilterButton = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 38px;
  align-self: flex-start;
  color: #f7a4a4;
  display: none;
  cursor: pointer;
  transition: all ease-in-out 0.4s;

  @media (max-width: 768px) {
    display: inline-block;
  }

  &:active {
    transform: scale(1.08);
  }
`;

export const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 0.4s;

  @media (max-width: 768px) {
    opacity: ${({ showFilters }) => (showFilters ? '1' : '0')};
    max-height: ${({ showFilters }) => (showFilters ? '100%' : '0')};
    height: ${({ showFilters }) => (showFilters ? '100%' : '0')};
  }
`;

export const Features = styled.p`
  font-weight: 600;
  font-size: 20px;
  text-align: left;
  margin: 1rem 0;
`;
