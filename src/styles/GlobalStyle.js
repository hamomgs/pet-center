import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #00856f;
    --secondary-color: #DCE9E2;
    --tertiary-color: #00453a;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'DM Sans', sans-serif;
    outline: none;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary-color);
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--primary-color);
  }

  body {
    background-color: #F6F8F8;
  }

  .alert, .alert:focus {
    border-color: red;
  }
`