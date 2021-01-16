import React from 'react';
import { Section, Text } from '../../components/globalStyle';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import {
  AddToCart,
  CartIcon,
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductPriceContainer,
  ProductPriceWrapper
} from './ProductPageStyles';

function ProductPage({ pageContext }) {
  const { product } = pageContext;

  return (
    <Layout>
      <SEO title={product?.name} />
      <Section>
        <ProductContainer>
          <ProductImage fluid={product.image.fluid} />
          <ProductInfo>
            <ProductName>{product?.name}</ProductName>
            <ProductPriceWrapper>
              <AddToCart>
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
