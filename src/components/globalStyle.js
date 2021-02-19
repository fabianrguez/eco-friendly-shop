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
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
  }

  #___gatsby, #gatsby-focus-wrapper {
    height: 100%
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Loved by the King', cursive;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:visited {
    color: inherit;
  }

  main {
    min-height: 74%;
  }

  .default-background {
    min-height: 80vh;
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

    .default-background {
      min-height: 50vh;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ noFluid }) => (noFluid ? '1rem 1.4rem' : '1.2rem 10rem')};

  @media (max-width: 945px) {
    padding: 1rem 1.4rem;
  }
`;

export const BigTitle = styled.h1`
  font-size: 2.4rem;
  align-self: flex-start;
`;

export const Text = styled.p`
  text-align: justify;
`;

export const Signature = styled.p`
  text-align: right;

  & span {
    font-family: 'Loved by the King', cursive;
    font-size: 28px;
  }
`;

export const LargeText = styled.p`
  text-align: justify;
  line-height: 1.6;

  & span {
    font-family: 'Loved by the King', cursive;
    font-size: 28px;
  }
`;

export const Button = styled.button`
  font-family: inherit;
  padding: 0.75rem;
  background: ${({ active }) => (active ? '#f7a4a4' : 'transparent')};
  border: 1px solid #f7a4a4;
  color: ${({ active }) => (active ? '#fff' : '#f7a4a4')};
  font-weight: 600;
  border-radius: 10px;
  margin: 1rem;
  max-width: 12rem;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: all ease-in-out 0.4s;
  outline: none;
  text-transform: capitalize;
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Objectives = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #111;
  padding: 1rem;
  border-radius: 10px;
  max-width: 700px;
  box-shadow: 0px 5px 7px rgb(0 0 0 / 20%), 0px -5px 7px rgb(0 0 0 / 20%);
`;

export const Objective = styled.h1`
  font-size: 2rem;
  text-align: center;

  &:before {
    content: '- ';
  }
`;

export default GlobalStyle;
