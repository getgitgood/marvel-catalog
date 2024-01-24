import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ $mobile?: boolean }>`
  @use url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

  html {
    font-size: 20px;
    font-family: 'Roboto Condensed', sans-serif;
    color: ${({ theme }) => theme.white};
    height: 100%;
  }

  body {
    height: 100%;
    background-color: ${({ theme }) => theme.grey};
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  button {
    cursor: pointer;
  }

  main {
    padding: 1em;
    height: 100%;
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
`;

export const theme = {
  red: '#ED1D24',
  black: '#000',
  grey: '#202020',
  hover: '#767676',
  white: '#fff',
  mobile: '550px',
  borderRadius: '0.25em'
};

export default GlobalStyle;
