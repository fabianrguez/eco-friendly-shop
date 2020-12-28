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
  
  @media (max-width: 768px) {
    body {
      overflow-x: hidden;
    }
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Loved+by+the+King&display=swap');  
`;

export default GlobalStyle;
