import { Box } from '@mui/material';

import PrimaryButton from '../PrimaryButton/PrimaryButton.tsx';
import Logo from '/Logo.svg';

export const MainIconBlok = () => (
  <Box sx={{ p: 2 }}>
    <img src={Logo}></img>
  </Box>
);

export const ButtonBlok = () => (
  <Box
    sx={{
      m: 1,
      display: 'grid',
      placeItems: { xs: 'center', lg: 'start' },
    }}>
    <PrimaryButton title="Підтримати музей" href="#" svgSpriteId="support_icon" />
  </Box>
);
