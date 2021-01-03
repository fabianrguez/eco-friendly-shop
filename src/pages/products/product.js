import React from 'react';
import { Section, Text } from '../../components/globalStyle';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

function ProductPage({ pageContext }) {
  const { product } = pageContext;
  return (
    <Layout>
      <SEO title="Producto tal" />
      <Section>
        <h1>{product.name}</h1>
        <div>Price: {product.price}</div>
        <Text>Description: {product.description.description}</Text>
      </Section>
    </Layout>
  );
}

export default ProductPage;
