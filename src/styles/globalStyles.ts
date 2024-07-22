// src/styles/GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    padding: 20px;
    font-size: 1.25rem;
    overflow: hidden; /* Remove scrollbars */
  }

  h1, p {
    animation: none; /* Disable animation for global styles */
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
