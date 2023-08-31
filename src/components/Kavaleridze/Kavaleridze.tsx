import { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Section from '../Section/Section';
import Menu from './Menu/Menu';

const Kavaleridze: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/about') {
      navigate('/about/artist');
    }
  }, [location]);

  return (
    <Section variant="light">
      <Container>
        <Grid container gridTemplateAreas='"menu content" "content content"'>
          <Grid item gridArea="menu">
            <Menu />
          </Grid>
          <Grid item gridArea="content">
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
};

export default Kavaleridze;
