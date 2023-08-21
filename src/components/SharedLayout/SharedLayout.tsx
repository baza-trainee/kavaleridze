import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';

const SharedLayout: FC = () => {
  return (
    <div>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
