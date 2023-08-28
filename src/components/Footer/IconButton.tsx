import { Box } from '@mui/material';

import PrimaryButton from '../PrimaryButton/PrimaryButton.tsx';
import Logo from '/Logo.svg';

export const MainIconBlok = () => (
  <Box>
    <img src={Logo}></img>
  </Box>
);

export const ButtonBlok = () => (
  <Box
    sx={{
      display: 'grid',
      placeItems: { xs: 'center', lg: 'start' },
    }}>
    <PrimaryButton title="Підтримати музей" href="#" svgSpriteId="support_icon" />
  </Box>
);
