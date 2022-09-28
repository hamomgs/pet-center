import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'DM Sans', sans-serif;
    outline: none;
  }

  body {
    background-color: #F6F8F8;
  }
`