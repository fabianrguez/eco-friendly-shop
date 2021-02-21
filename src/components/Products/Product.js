import React from 'react';
import { ProductCard, ProductPrice } from './ProductsStyles';
import Img from 'gatsby-image';

function Product({
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
      <Img fluid={image?.fluid} style={{borderRadius: '5px'}} />
      <div>
        <h1>{name}</h1>
        <p>
          {shortDescription
            ? truncate(description?.description)
            : description?.description}
        </p>
      </div>
      <ProductPrice>
        <span>{price.toFixed(2)}€</span>
      </ProductPrice>
    </ProductCard>
  );
}

export default Product;
