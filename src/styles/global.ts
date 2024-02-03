import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${() => css`
    * {
      margin: 0;
      outline: 0;
      padding: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html,
    body {
      height: 100%;
      overflow: hidden;
    }

    html {
      font-size: 10px;
      min-width: 320px;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, 'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Web', sans-serif;
      line-height: 1.5;
      scroll-behavior: smooth;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    ul,
    li,
    ol {
      list-style: none;
    }
    .ps__rail-y {
      z-index: 1000;
    }
  `};
`
