import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --bg-main: #FFFBFC;
    --cobalt-blue: #0B4CAD;
    --text-primary: #081F5C;
    --jet-stream: #B7D5D4;

    --primary-light-blue: #CAF0F8;
    --primary: #4A46EB;
    --secondary: #753AFF;
    --darkBlue: #070747; 
    --darkPurple: #0E0034;
    --black-1: #0D121F;
    --black-2: #121826;
    --text-1: #002244;
    --white-1: #FFFBFC;
    --light-gray: #BBBBBB;
    --gray: #2B2B2B;
    --grey: var(--gray);
    --white: #FFFBFC;
    --black: black;
  }
  html{
    font-size: 10px;
    overflow-x: hidden;
  }
  
  body{
    min-height: 100vh;
    line-height: 1.5;
    width: 100%;
    overflow-x: hidden !important;
    font-family: 'Poppins';
    background-color: var(--bg-main);
    color: var(--white);
  }
  a{
    text-decoration: none;
    color: var(--white);
  }
  .container{
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    /* overflow-x: hidden; */
  }
  img, svg{
    height: 100%;
    width: 100%;
    user-select: none;
  }
  li, ul{
    list-style: none;
  }
`;

export default GlobalStyles;
