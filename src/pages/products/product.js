import React from 'react';
import { Section, Text } from '../../components/globalStyle';
import Layout from '../../components/layout';
import {
  AddToCart,
  CartIcon,
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductPriceContainer,
  ProductPriceWrapper,
} from '../../components/ProductPageStyles';
import SEO from '../../components/seo';
import actionType from '../../context/actionType';
import { useDispatchContext } from '../../context/ContextProvider';

function ProductPage({ pageContext }) {
  const { product } = pageContext;
  const dispatch = useDispatchContext();

  return (
    <Layout>
      <SEO title={product?.name} />
      <Section noFluid>
        <ProductContainer>
          <ProductImage fluid={product?.image.fluid} />
          <ProductInfo>
            <ProductName>{product?.name}</ProductName>
            <ProductPriceWrapper>
              <AddToCart
                onClick={() =>
                  dispatch({ type: actionType.ADD_CART, item: product })
                }
              >
                <CartIcon />
                <span>Añadir al carrito</span>
              </AddToCart>
              <ProductPriceContainer>
                <ProductPrice>{product?.price}</ProductPrice>
              </ProductPriceContainer>
            </ProductPriceWrapper>
            <Text>{product?.description.description}</Text>
          </ProductInfo>
        </ProductContainer>
      </Section>
    </Layout>
  );
}

export default ProductPage;
