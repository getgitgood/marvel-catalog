import { Outlet } from 'react-router-dom';

export default function MainContent() {
  return (
    <>
      <header className="header" />
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer" />
    </>
  );
}
