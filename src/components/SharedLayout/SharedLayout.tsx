import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const SharedLayout: FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default SharedLayout;
