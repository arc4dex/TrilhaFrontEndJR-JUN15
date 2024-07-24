import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: black;
    color: green;
    font-family: 'Courier New', Courier, monospace;
    line-height: 1.6;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-size: 1.25rem;
    overflow: auto; /* Permitir rolagem */
  }

  h1, p {
    animation: none; 
  }

  button {
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: darkgreen;
    }
  }
`;

export default GlobalStyle;
