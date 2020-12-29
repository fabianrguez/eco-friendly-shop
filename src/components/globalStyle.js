import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *:after,
  *:before {
    box-sizing: inherit;
  }
  
  html,
  body {
    font-family: 'Roboto', sans-serif;
    color: #111;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Loved by the King', cursive;
  }
  
  button {
    font-family: inherit;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  a:visited {
    color: inherit;
  }
  
  .default-background {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(rgba(255, 158, 9, 0.5), rgba(255, 158, 9, 0.5));
    background-position: center;
    background-size: cover;
    opacity: 1 !important;
  }
  
  @media (max-width: 768px) {
    body {
      overflow-x: hidden;
    }
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  top: 0;
  left: 0;
`;

export const Section = styled.section`
  padding: 1rem;
`;

export default GlobalStyle;
