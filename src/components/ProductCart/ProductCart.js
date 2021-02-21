import React from 'react';
import actionType from '../../context/actionType';
import { useDispatchContext } from '../../context/ContextProvider';
import { Button } from '../globalStyle';
import {
  DeleteIcon,
  ProductCartContainer,
  ProductCartInfo,
  ProductImage,
  ProductPrice,
  ProductPriceContainer,
  ProductPriceWrapper,
} from './ProductCartStyle';

function ProductCart({ id, name, price, image }) {
  const dispatch = useDispatchContext();

  const removeFromCart = () => {
    dispatch({
      type: actionType.REMOVE_FROM_CART,
      item: id,
    });
  };

  return (
    <ProductCartContainer>
      <ProductImage fluid={image?.fluid} />
      <ProductCartInfo>
        <h1>{name}</h1>
        <ProductPriceWrapper>
          <ProductPriceContainer>
            <ProductPrice>{price.toFixed(2)}</ProductPrice>
          </ProductPriceContainer>
        </ProductPriceWrapper>
        <Button onClick={() => removeFromCart()}>
          <DeleteIcon />
          Quitar del carrito
        </Button>
      </ProductCartInfo>
    </ProductCartContainer>
  );
}

export default ProductCart;
