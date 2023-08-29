import { Typography, Box, Container } from '@mui/material';
import { FC } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Section from '../Section/Section';

const Search: FC = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('request');

  return (
    <Section variant="light">
      <Container>
        <Box sx={{ px: 3, py: 3 }}>
          <Typography> Here is search results.</Typography>
          <Typography mb={4}>Search: {search?.split('-').join(' ')}</Typography>

          <PrimaryButton component={Link} href="/" title="Повернутись на головну" svgSpriteId="arrowLeft_icon" />
        </Box>
      </Container>
    </Section>
  );
};

export default Search;
