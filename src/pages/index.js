import React from 'react';
import Banner from '../components/Banner/Banner';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Banner
      src="https://images.unsplash.com/flagged/photo-1554575314-044335e2a2db?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fGVjbyUyMGZyaWVuZGx5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60"
      title="Bienvenidos al futuro. Ser eco-friendly es posible."
    />
    <section>
      <h1>Index page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ut
        optio doloribus, in beatae quidem asperiores porro iste repudiandae!
        Quidem est mollitia repellendus libero consectetur nemo numquam saepe
        nihil laborum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Provident ut optio doloribus, in beatae quidem asperiores porro iste
        repudiandae! Quidem est mollitia repellendus libero consectetur nemo
        numquam saepe nihil laborum! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Provident ut optio doloribus, in beatae quidem
        asperiores porro iste repudiandae! Quidem est mollitia repellendus
        libero consectetur nemo numquam saepe nihil laborum! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Provident ut optio doloribus, in
        beatae quidem asperiores porro iste repudiandae! Quidem est mollitia
        repellendus libero consectetur nemo numquam saepe nihil laborum!
      </p>
    </section>
  </Layout>
);

export default IndexPage;
