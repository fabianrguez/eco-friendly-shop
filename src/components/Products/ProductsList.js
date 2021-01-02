import React, { useState } from 'react';
import { Button } from '../globalStyle';
import Product from './Product';
import { ProductsListContainer, ProductsListWrapper } from './ProductsStyles';

function ProductsList({ products }) {
  const [featuredProducts] = useState(
    products.filter(({ node: product }) => product.featured === true)
  );

  return (
    <ProductsListContainer>
      <ProductsListWrapper>
        <Product {...featuredProducts[0]?.node} shortDescription />
        <Product {...featuredProducts[0]?.node} shortDescription />
        <Product {...featuredProducts[0]?.node} shortDescription />
      </ProductsListWrapper>
      <Button>Ver todos los productos</Button>
    </ProductsListContainer>
  );
}

export default ProductsList;
