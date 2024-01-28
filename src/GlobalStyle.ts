import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ $mobile?: boolean }>`
  @use url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 20px;
    font-family: 'Roboto Condensed', sans-serif;
    color: ${({ theme }) => theme.white};
    height: 100%;
    overflow: hidden auto;
    margin-right: -5px;
  }
  
  body {
    position: relative;
    background-color: ${({ theme }) => theme.blue};
    height: 100%;
    overflow-x: hidden;
    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.8em
    }
  }

  button {
    cursor: pointer;
  }

  main {
    position: relative;
    padding: 1em;
    // min-height: 100%;
  }

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.4em;
  }

  li {
    list-style: none;
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
    width: 5px;
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
    width: 7px;
    cursor: pointer;
  }
`;

export const theme = {
  red: '#ED1D24',
  black: '#000',
  grey: '#202020',
  hover: '#767676',
  white: '#fff',
  blue: '#303651',
  lightgrey: '#504a4a',
  laptop: '1200px',
  mobile: '500px',
  desktop: '1600px',
  borderRadius: '0.25em'
};

export default GlobalStyle;
