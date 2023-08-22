import { Stack } from '@mui/material';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import Header from '../Header/Header';

const SharedLayout: FC = () => {
  return (
    <Stack display={'flex'} minHeight={'100vh'}>
      <Header />
      <Stack
        sx={{
          minHeight: '100%',
          flex: '1 1 auto',
        }}>
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default SharedLayout;
