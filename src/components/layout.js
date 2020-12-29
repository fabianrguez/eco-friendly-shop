// import { graphql, useStaticQuery } from 'gatsby';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import GlobalStyle, { Backdrop } from './globalStyle';
import Header from './Header/Header';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const clickBackdropHandler = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    menuOpen
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'unset');
    window.addEventListener(
      'resize',
      e => e.target.innerWidth > 768 && setMenuOpen(false)
    );
  }, [menuOpen]);

  return (
    <>
      <GlobalStyle />
      {menuOpen && <Backdrop onClick={() => clickBackdropHandler()} />}
      <Header
        title={data.site?.siteMetadata.title}
        menuOpen={menuOpen}
        menuOpenHandler={setMenuOpen}
      />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
