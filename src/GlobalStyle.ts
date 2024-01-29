import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @use url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 20px;
    font-family: 'Roboto Condensed', sans-serif;
    color: ${({ theme }) => theme.white};
    height: 100%;
    // margin-right: -5px;
  }
  
  #root {
    height: 100%;
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
    appearance: none;
    border: 0;
    cursor: pointer;
    border-radius: 5px;
    background: rgba(70, 118, 215, 1);
    color: #fff;
    padding: 0.3em 0.8em;
    font-size: 16px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.5);
    transition: background ease 0.2s;
  
    &:disabled {
      background: grey;
    }
  
    &:not(:disabled):hover {
      background: rgba(70, 118, 215, 0.5);
    }
  }

  main {
    position: relative;
    padding: 1em;
    min-height: calc(100% - 3em);
  }

  h1 {
    font-size: 1em;
    display: none;
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

    &:hover, active {
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
  tooltipText: 'Необходима регистрация',
  white: '#fff',
  blue: '#303651',
  golden: '#DAA520',
  lightgrey: '#504a4a',
  laptop: '1200px',
  mobile: '500px',
  desktop: '1600px',
  borderRadius: '0.25em'
};

export default GlobalStyle;
