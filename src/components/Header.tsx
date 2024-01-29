import { styled } from 'styled-components';
import imgURL from '../assets/img/marvel_logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { updateUserStatus } from '../features/projectSlice';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: ${({ theme }) => theme.black};

  @media (max-width: ${({ theme }) => theme.laptop}) {
    font-size: 0.7em;
  }
  .navigation {
    display: flex;
    justify-content: space-around;
    width: 40%;

    @media (max-width: ${({ theme }) => theme.laptop}) {
      width: 90%;
    }
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

    &.active {
      position: relative;
      color: $color-light-s;
      pointer-events: none;
      &::after {
        content: '';
        left: 0;
        position: absolute;
        bottom: -6px;
        display: block;
        height: 3px;
        width: 100%;
        background: ${({ theme }) => theme.white};
      }
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
  const { isAuthenticated } = useAppSelector((state) => state.project);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const authClickHandler = () => {
    if (isAuthenticated) {
      dispatch(updateUserStatus(false));
      navigate('/');
    } else {
      navigate('auth');
    }
  };

  return (
    <StyledHeader className="header">
      <a className="logo_link" href="https://developer.marvel.com">
        <img className="logo_img" src={imgURL} alt="marvel logo" />
        <h1>Каталог Комиксов Марвел</h1>
      </a>
      <nav className="navigation">
        <NavLink to={'catalog'} className="link header_link">
          Каталог
        </NavLink>
        {isAuthenticated && (
          <>
            <NavLink to={'purchased'} className="link header_link">
              Приобретённые
            </NavLink>
            <NavLink to={'favorites'} className="link header_link">
              Избранные
            </NavLink>
          </>
        )}
      </nav>

      <NavLink to={'#'} onClick={authClickHandler} className="signin">
        {!isAuthenticated ? 'Войти' : 'Выход'}
      </NavLink>
    </StyledHeader>
  );
}
