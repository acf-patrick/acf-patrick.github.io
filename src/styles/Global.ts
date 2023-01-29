import { createGlobalStyle } from "styled-components";
import backgroundImage from "../assets/images/background.png";
import poppinsFont from "../assets/fonts/Poppins-Light.ttf";

export default createGlobalStyle<{ theme: any }>`
  @font-face {
    font-family: Poppins;
    src: url(${poppinsFont});
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
    background-image: url(backgroundImage);
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
