import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ $mobile?: boolean }>`
  @use '../node_modules/normalize.css/normalize.css';

  html {
    height: 100%;
    font-size: 20px;
  }

  body {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
