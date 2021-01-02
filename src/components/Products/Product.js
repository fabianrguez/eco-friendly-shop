import React from 'react';
import { ProductCard, ProductPrice } from './ProductsStyles';
import Img from 'gatsby-image';

function Product({
  category,
  name,
  price,
  image,
  description,
  shortDescription = false,
}) {
  const truncate = (string, limit = 50) =>
    string?.length > limit ? `${string.substr(0, limit - 1)}...` : string;

  return (
    <ProductCard>
      <Img fluid={image.fluid} />
      <h1>{name}</h1>
      <p>
        {shortDescription
          ? truncate(description.description, 150)
          : description.description}
      </p>
      <ProductPrice>
        <span>{price}€</span>
      </ProductPrice>
    </ProductCard>
  );
}

export default Product;
