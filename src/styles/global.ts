import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
    max-height: 100vh;
    background-color: #F3F2EF;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    
  }
`;
