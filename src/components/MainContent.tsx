import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function MainContent() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer" />
    </>
  );
}
