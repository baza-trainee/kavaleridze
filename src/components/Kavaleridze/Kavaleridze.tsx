import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, useTheme, useMediaQuery } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Section from '../Section/Section';
import Menu from './Menu/Menu';

const Kavaleridze: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if (location.pathname === '/about') {
      navigate('/about/artist');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <Section variant="light">
      <Container>
        {isNotMobile && <Menu />}
        <Outlet />
      </Container>
    </Section>
  );
};

export default Kavaleridze;
