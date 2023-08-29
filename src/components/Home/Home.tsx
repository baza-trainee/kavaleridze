import { FC } from 'react';
import { Container, Typography } from '@mui/material';
import Section from '../Section/Section';

const Home: FC = () => {
  return (
    <Section variant="light">
      <Container>
        <div style={{ height: '200px' }}>
          <Typography variant="h2">Головна</Typography>
        </div>
      </Container>
    </Section>
  );
};

export default Home;
