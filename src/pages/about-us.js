import React from 'react';
import { Section } from '../components/globalStyle';
import Layout from '../components/layout';
import SEO from '../components/seo';

function aboutUs() {
  return (
    <Layout>
      <SEO title="Sobre Nosotros" />
      <Section>
        <h1>Sobre Nosotros</h1>
      </Section>
    </Layout>
  );
}

export default aboutUs;
