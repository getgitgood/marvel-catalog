import { Outlet } from 'react-router-dom';
import Header from './Header';
import { styled } from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default function MainContent() {
  return (
    <>
      <Header />
      <Main className="main">
        <Outlet />
      </Main>
      <footer className="footer" />
    </>
  );
}
