import { Typography, Box, Link } from '@mui/material';
import { FC } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Search: FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const search = searchParams.get('request');

  const onCLickBtn = () => {
    navigate('/');
  };
  return (
    <Box sx={{ px: 3, py: 3 }}>
      <Typography> Here is search results.</Typography>
      <Typography mb={2}>Search: {search?.split('-').join(' ')}</Typography>
      <Box mb={4}>
        <Link href="/contacts">One result...</Link>
      </Box>

      <PrimaryButton title="Повернутись на головну" svgSpriteId="arrowLeft_icon" onClick={onCLickBtn} />
    </Box>
  );
};

export default Search;
