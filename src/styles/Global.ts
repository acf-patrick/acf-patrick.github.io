import { createGlobalStyle } from "styled-components";

export default createGlobalStyle<{ theme: any }>`
  @font-face {
    font-family: Poppins;
    src: url("../assets/fonts/Poppins-Light.ttf");
  }

  :root {
    font-family: Poppins, Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  html {
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    background-image: url(../assets/images/background.png);
    color: white;
  }

  li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transition};

    &:hover {
      color: white;
    }
  }
  
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 500;
  }
`;
