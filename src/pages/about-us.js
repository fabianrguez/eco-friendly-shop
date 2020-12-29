import React from 'react';
import { BigTitle, Section } from '../components/globalStyle';
import Layout from '../components/layout';
import SEO from '../components/seo';

function aboutUs() {
  return (
    <Layout>
      <SEO title="Sobre Nosotros" />
      <Section>
        <BigTitle>Sobre Nosotros</BigTitle>
      </Section>
    </Layout>
  );
}

export default aboutUs;
