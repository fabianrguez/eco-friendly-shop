import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: No encontrado" />
    <h1>404: No encontrado</h1>
    <p>Acabas de llegar a una ruta que no existe... que tristeza.</p>
  </Layout>
);

export default NotFoundPage;
