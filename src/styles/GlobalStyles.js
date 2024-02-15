import { createGlobalStyle } from "styled-components";

//CSS in JS
export const GlobalStyles = createGlobalStyle`
  :root{
    font-size: 62.5%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    background-color: #f5f5f5;
  }
`