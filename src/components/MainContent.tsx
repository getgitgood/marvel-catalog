import { Outlet } from 'react-router-dom';
import Header from './Header';
import { styled } from 'styled-components';
import Footer from './Footer';

const Main = styled.main`
  display: flex;
  margin-top: 3em;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: ${({ theme }) => theme.laptop}) {
    margin-top: 1.8em;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 1.7em;
  }
`;
export default function MainContent() {
  return (
    <>
      <Header />
      <Main className="main">
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}
