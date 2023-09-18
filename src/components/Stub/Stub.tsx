import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import Section from '../Common/Section';
import { Wrapper } from './styles';

const Stub: FC = () => {
  return (
    <Section variant="light">
      <Wrapper>
        <Typography sx={{ textAlign: 'center', fontWeight: 500 }} variant="h2">
          Вибачте, на даний момент ця сторінка знаходиться в розробці
        </Typography>

        <Button variant="secondary" component={Link} to="/" style={{ marginTop: '20px' }}>
          На головну сторінку
        </Button>
      </Wrapper>
    </Section>
  );
};

export default Stub;
