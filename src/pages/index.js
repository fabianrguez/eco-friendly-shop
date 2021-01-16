import { graphql, navigate } from 'gatsby';
import React from 'react';
import Banner from '../components/Banner/Banner';
import { BigTitle, Button, Section, Text } from '../components/globalStyle';
import Layout from '../components/layout';
import ProductsList from '../components/Products/ProductsList';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Inicio" />
      <Banner
        img={data.img.childImageSharp.fluid}
        title="Bienvenidos al nuevo futuro. Ser eco-friendly es posible."
      />
      <Section>
        <BigTitle>Nuestro objetivo</BigTitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          pariatur deserunt adipisci animi sed corrupti nihil ut laboriosam modi
          dolorem dignissimos aperiam placeat, enim voluptas. Voluptates eos
          nulla ut ipsa. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Asperiores pariatur deserunt adipisci animi sed corrupti nihil
          ut laboriosam modi dolorem dignissimos aperiam placeat, enim voluptas.
          Voluptates eos nulla ut ipsa.
        </Text>
        <Button onClick={() => navigate('/about-us')}>
          Quiero saber más...
        </Button>
      </Section>
      <Section>
        <BigTitle>Nuestros productos</BigTitle>
        <ProductsList products={data.products.edges} />
        <Button onClick={() => navigate('/products')}>
          Ver todos los productos
        </Button>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  {
    img: file(relativePath: { eq: "banner-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
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

export default IndexPage;
