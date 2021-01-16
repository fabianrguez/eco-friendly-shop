import { graphql } from 'gatsby';
import React from 'react';
import { BigTitle, Section } from '../../components/globalStyle';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import ProductsList from '../../components/Products/ProductsList';

function ProductsPage({ data }) {
  return (
    <Layout>
      <SEO title="Productos" />
      <Section>
        <BigTitle>Nuestros productos</BigTitle>
        <ProductsList
          products={data.products.edges}
          onlyFeatured={false}
        ></ProductsList>
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query ProuctsQuery {
    products: allContentfulProduct {
      edges {
        node {
          id
          name
          price
          category
          featured
          description {
            description
          }
          image {
            fluid(maxHeight: 326) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default ProductsPage;
