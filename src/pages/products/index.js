import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { BigTitle, Button, Section } from '../../components/globalStyle';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import ProductsList from '../../components/Products/ProductsList';
import { Filters } from '../../components/ProductPageStyles';

function ProductsPage({ data }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Todos');

  useEffect(() => {
    setProducts(data.products.edges);
    setCategories(getCategories(data.products.edges));
  }, [data.products.edges]);

  const getCategories = products => {
    const allCategories = products.map(product =>
      product.node.category.toLowerCase()
    );
    return ['Todos', ...new Set(allCategories)];
  };

  const filterProducts = (category = 'Todos') => {
    const allProducts = [...data.products.edges];
    setActiveCategory(category);
    category === 'Todos'
      ? setProducts(allProducts)
      : setProducts(
          allProducts.filter(
            ({ node: product }) => product.category.toLowerCase() === category
          )
        );
  };

  return (
    <Layout>
      <SEO title="Productos" />
      <Section>
        <BigTitle>Nuestros productos</BigTitle>
        <Filters>
          {categories.map((category, index) => (
            <Button
              key={index}
              active={activeCategory === category}
              onClick={() => filterProducts(category)}
            >
              {category}
            </Button>
          ))}
        </Filters>
        <ProductsList products={products} onlyFeatured={false}></ProductsList>
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
