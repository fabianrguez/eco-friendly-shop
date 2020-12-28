import { createGlobalStyle } from 'styled-components';

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
  }
  
  a:visited {
    color: inherit;
  }

  section {
    padding: 1rem;
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

export default GlobalStyle;
