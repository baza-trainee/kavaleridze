import { Box, Container, Typography } from '@mui/material';
import { FC } from 'react';
import Section from '../Section/Section';

const Home: FC = () => {
  return (
    <>
      <Section variant="light">
        <Container>
          <Box sx={{ height: '200px' }}>
            <Typography variant="h2">Головна</Typography>
          </Box>

          <Box sx={{ height: '200px' }}>
            <Typography variant="h2">Перша секція</Typography>
          </Box>
          <Box sx={{ height: '200px' }}>
            <Typography variant="h2">Друга секція</Typography>
          </Box>
          <Box sx={{ height: '200px' }}>
            <Typography variant="h2">Третя секція</Typography>
          </Box>
        </Container>
      </Section>
      <Section variant="dark">
        <Container>
          <Box sx={{ height: '200px' }}>
            <Typography variant="h2">Четверта секція</Typography>
          </Box>
        </Container>
      </Section>
      <Section variant="light">
        <Container>
          <Box sx={{ height: '200px' }}>
            <Typography variant="h2">П'ята секція</Typography>
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default Home;
