import styled from 'styled-components';
import Img from 'gatsby-image';
import { Button } from './globalStyle';
import { CgShoppingCart } from 'react-icons/cg';

export const ProductContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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

  @media (max-width: 375px) {
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
  max-height: 460px;
  border-radius: 20px;
  box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.3);

  @media (max-width: 375px) {
    width: 90%;
  }
`;
