import { styled } from 'styled-components';
import imgURL from '../assets/img/marvel_logo.svg';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;

  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.black};
  .navigation {
    display: flex;
    justify-content: space-around;
    width: 30%;
  }
  .header_link {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      display: block;
      height: 2px;
      background: ${({ theme }) => theme.white};
      width: 0;
      left: 50%;
      transition:
        width 0.4s ease 0s,
        left 0.4s ease 0s;
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }
  }
  .logo_link {
    line-height: 0;

    .logo_img {
      width: 5.5em;

      @media screen and (max-width: ${({ theme }) => theme.mobile}) {
        width: 4.5em;
      }
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader className="header">
      <a className="logo_link" href="#">
        <img className="logo_img" src={imgURL} alt="logo" />
      </a>
      <nav className="navigation">
        <Link to={'catalog'} className="link header_link">
          Каталог
        </Link>
        <Link to={'purchased'} className="link header_link">
          Приобретённые
        </Link>
        <Link to={'favorites'} className="link header_link">
          Избранные
        </Link>
      </nav>
      <div className="authentication">
        <a className="signin">Sign In</a>
      </div>
    </StyledHeader>
  );
}
