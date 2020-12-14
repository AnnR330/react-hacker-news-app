import { createGlobalStyle } from 'styled-components'
import {colors} from './colorsPalette'

const GlobalStyles = createGlobalStyle `
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after{
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        margin: 0;
        padding: 0;
        background-color: ${() => colors.background}
    }

    ul {
        list-style: none;
        padding: 0;
    }

    a {
        text-decoration: none;
    }
  `;

export default GlobalStyles;