import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0px;
    margin:0px;
    box-sizing:border-box;
    color:#000;
    font-family: "arial";
    font-weight:400;
    border-collapse: collapse;
    line-height: 1;
    letter-spacing:1px;
    list-style:none;
  }

  html{
    background: #cae9ff;
  }

`;

export default GlobalStyle;
