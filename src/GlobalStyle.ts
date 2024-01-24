import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ $mobile?: boolean }>`
  @use '../node_modules/normalize.css/normalize.css';
  @use url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');


  html {
    height: 100%;
    font-size: 20px;
    font-family: 'Roboto Condensed', sans-serif;
  }

  body {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .header {
    background-color: #202020;
  }

  a {
    cursor: pointer;
    color: #fff;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: #767676;
    }
    @media screen and (max-width: 550px) {
      font-size: 0.7em;
    }
  }
  //red: #ED1D24;
  // white: #fff;
  // black: #000;
  // grey: #202020;
  // hover: #767676;
`;

export const theme = {
  red: '#ED1D24',
  black: '#000',
  grey: '#202020',
  hover: '#767676',
  white: '#fff',
  mobile: '550px'
};

export default GlobalStyle;
