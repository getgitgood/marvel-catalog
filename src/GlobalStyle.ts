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
    display: flex;
    flex-direction: column;

    position: relative;
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
  ::-webkit-scrollbar {
    width: 0.25em;
  }
  
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.black};
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: transparent;
    transition: background-color 1s ease;
  }
  
  :hover::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.lightgrey};
    border-radius: 5px;
    width: 0.35em;
    cursor: pointer;
  }
`;

export const theme = {
  red: '#ED1D24',
  black: '#000',
  grey: '#202020',
  hover: '#767676',
  white: '#fff',
  lightgrey: '#d3d3d3',
  mobile: '585px',
  borderRadius: '0.25em'
};

export default GlobalStyle;
