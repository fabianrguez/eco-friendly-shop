import { CgTrash } from 'react-icons/cg';
import styled from 'styled-components';
import Img from 'gatsby-image';

export const ProductCartContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

export const ProductCartInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const DeleteIcon = styled(CgTrash)`
  font-size: 28px;
`;

export const ProductPriceContainer = styled.div`
  padding: 20px 10px;
  width: 100%;
  align-self: flex-end;
  text-align: center;
  margin: 10px 0;
  border-radius: 20px;
  border: 1px dashed #f7a4a4;
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

export const ProductImage = styled(Img)`
  width: 100%;
  max-height: 326px;
  max-width: 326px;
  border-radius: 20px;
  box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.3);
`;
