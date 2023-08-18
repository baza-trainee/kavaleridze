import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const SharedLayout: FC = () => {
  return (
    <Container>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </Container>
  );
};

export default SharedLayout;
