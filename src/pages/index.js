import { graphql } from 'gatsby';
import React from 'react';
import Banner from '../components/Banner/Banner';
import { Section } from '../components/globalStyle';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Inicio" />
      <Banner
        img={data.img.childImageSharp.fluid}
        title="Bienvenidos al nuevo futuro. Ser eco-friendly es posible"
      />
      <Section>
        <h1>Index page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ut
          optio doloribus, in beatae quidem asperiores porro iste repudiandae!
          Quidem est mollitia repellendus libero consectetur nemo numquam saepe
          nihil laborum! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Provident ut optio doloribus, in beatae quidem asperiores porro
          iste repudiandae! Quidem est mollitia repellendus libero consectetur
          nemo numquam saepe nihil laborum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Provident ut optio doloribus, in beatae
          quidem asperiores porro iste repudiandae! Quidem est mollitia
          repellendus libero consectetur nemo numquam saepe nihil laborum! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Provident ut optio
          doloribus, in beatae quidem asperiores porro iste repudiandae! Quidem
          est mollitia repellendus libero consectetur nemo numquam saepe nihil
          laborum!
        </p>
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
  }
`;

export default IndexPage;
