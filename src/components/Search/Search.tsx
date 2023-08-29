import { Typography, Box, Container } from '@mui/material';
import { FC, MouseEvent } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Section from '../Section/Section';

const Search: FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const search = searchParams.get('request');

  const onCLickBtn = (e: MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <Section variant="light">
      <Container>
        <Box sx={{ px: 3, py: 3 }}>
          <Typography> Here is search results.</Typography>
          <Typography mb={4}>Search: {search?.split('-').join(' ')}</Typography>

          <PrimaryButton component={Link} to="/contacts" title="Повернутись на головну" svgSpriteId="arrowLeft_icon" onClick={onCLickBtn} />
        </Box>
      </Container>
    </Section>
  );
};

export default Search;
