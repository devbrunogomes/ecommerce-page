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
    background-color: whitesmoke;
  }

  //Para aparecer a maozinha ao colocar o mouse em cima
  button {
    cursor: pointer;
    transition: filter 0.3s;

    &:hover{
      filter: brightness(1.2);
      transition: filter 0.3s;
    }
  }
`