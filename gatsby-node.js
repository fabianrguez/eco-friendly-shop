const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const allProducts = await graphql(`
    {
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
            features
            image {
              fluid(maxHeight: 326, maxWidth: 326) {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  `);

  const productPage = path.resolve('src/pages/products/product.js');
  allProducts &&
    allProducts.data.products.edges.forEach(({ node }) => {
      createPage({
        path: `/products/${node.id}`,
        component: productPage,
        context: {
          product: node,
        },
      });
    });
};
