import { createGlobalStyle } from 'styled-components'
import { theme } from './index'

// font-family: 'Montserrat', sans-serif;
// font-family: 'Open Sans', sans-serif;
// font-family: 'Roboto', sans-serif;

const { backgroundBody, toast } = theme
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Roboto", sans-serif;
  }

  body {
    background: ${backgroundBody};
  }
  
  .toast-success {
    background: ${toast};
  }

`
