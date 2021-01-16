import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import Product from './Product';
import { ProductsListContainer, ProductsListWrapper } from './ProductsStyles';

function ProductsList({ products, onlyFeatured = true }) {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    products &&
      setFeaturedProducts(
        products.filter(({ node: product }) => product.featured === true)
      );
  }, [products]);

  return (
    <ProductsListContainer>
      <ProductsListWrapper>
        {onlyFeatured
          ? featuredProducts &&
            featuredProducts.map(({ node }) => (
              <Link key={node.id} to={`/products/${node.id}`}>
                <Product {...node} shortDescription />
              </Link>
            ))
          : products &&
            products.map(({ node }) => (
              <Link key={node.id} to={`/products/${node.id}`}>
                <Product {...node} shortDescription />
              </Link>
            ))}
      </ProductsListWrapper>
    </ProductsListContainer>
  );
}

export default ProductsList;
