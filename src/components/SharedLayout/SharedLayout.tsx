import { FC } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout: FC = () => {
  return (
    <div>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default SharedLayout;
