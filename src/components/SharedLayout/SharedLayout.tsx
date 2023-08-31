import { Stack, useScrollTrigger } from '@mui/material';
import { FC, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Page from '../Breadcrumbs/Breadcrumbs';
import { useLocation } from 'react-router-dom';

const SharedLayout: FC = () => {
  const location = useLocation();

  const isHomePage = location.pathname;
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollTrigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });

  const onClickScrollTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  };
  return (
    <Stack minHeight={'100vh'}>
      <Header ref={scrollRef} />
      {isHomePage !== '/' && <Page />}
      <Stack
        sx={{
          minHeight: '100%',
          flex: '1 1 auto',
        }}>
        <Outlet />
        <ScrollToTop scrollTrigger={scrollTrigger} onClickScrollTop={onClickScrollTop} />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default SharedLayout;
