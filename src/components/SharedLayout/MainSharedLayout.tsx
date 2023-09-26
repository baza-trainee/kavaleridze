import { Stack, useMediaQuery, useScrollTrigger, useTheme } from '@mui/material';
import { FC, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Breadcrumbs from '../main/Breadcrumbs/Breadcrumbs';
import Footer from '../main/Footer/Footer';
import Header from '../main/Header/Header';
import ScrollToTop from '../main/ScrollToTop/ScrollToTop';

const SharedLayout: FC = () => {
  const location = useLocation();

  const isHomePage = location.pathname;
  const is404Page = location.pathname === '/404';
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollTrigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const onClickScrollTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  };

  return (
    <Stack minHeight={'100vh'}>
      <Header ref={scrollRef} />
      {isHomePage !== '/' && !is404Page && <Breadcrumbs />}
      <Stack
        sx={{
          minHeight: '100%',
          flex: '1 1 auto',
        }}>
        <Outlet />
        {isDesktop && <ScrollToTop scrollTrigger={scrollTrigger} onClickScrollTop={onClickScrollTop} />}
      </Stack>
      <Footer />
      {!isDesktop && <ScrollToTop scrollTrigger={scrollTrigger} onClickScrollTop={onClickScrollTop} />}
    </Stack>
  );
};

export default SharedLayout;
