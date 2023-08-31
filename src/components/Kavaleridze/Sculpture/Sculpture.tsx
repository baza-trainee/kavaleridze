import { FC } from 'react';
import { Container, Box, Typography } from '@mui/material';
import Section from '../../Section/Section';

const Sculpture: FC = () => {
  return (
    <Section variant="light">
      <Container>
        <Box style={{ height: '200px' }}>
          <Typography variant="h2">Скульптура</Typography>
        </Box>
      </Container>
    </Section>
  );
};

export default Sculpture;
