import { FC } from 'react';
import { Container, Box, Typography } from '@mui/material';
import Section from '../Common/Section';

const Tickets: FC = () => {
  return (
    <Section variant="light">
      <Container>
        <Box sx={{ height: '200px' }}>
          <Typography variant="h2">Вибачте, на даний момент ця сторінка знаходиться в розробці</Typography>
        </Box>
      </Container>
    </Section>
  );
};

export default Tickets;
