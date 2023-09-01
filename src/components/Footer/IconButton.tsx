import { Box } from '@mui/material';

import { Link } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton/PrimaryButton.tsx';
import Logo from '/Logo.svg';

export const MainIconBlok = () => {
  return (
    <Box>
      <Link to={'/'}>
        <img src={Logo}></img>
      </Link>
    </Box>
  );
};

export const ButtonBlok = () => (
  <Box
    sx={{
      display: 'grid',
      placeItems: { xs: 'center', lg: 'start' },
    }}>
    <PrimaryButton sx={{ width: { md: '280px', lg: '261px' } }} title="Підтримати музей" href="#" svgSpriteId="support_icon" />
  </Box>
);
