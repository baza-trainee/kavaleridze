import { Box, styled } from '@mui/material';
import PrimaryButton from '../PrimaryButton/PrimaryButton.tsx';
import Logo from '/public/Logo.svg';

export const MainIconBlok = () => (
  <Box sx={{ p: 2 }}>
    <img src={Logo}></img>
  </Box>
);
const BoxButton = styled(Box)(({ theme }) => ({
  margin: '8px',
  display: 'grid',

  [theme.breakpoints.down('lg')]: {
    placeItems: 'center',
  },
  [theme.breakpoints.down('md')]: {
    placeItems: 'center',
  },
}));
export const ButtonBlok = () => (
  <BoxButton>
    <PrimaryButton title="Підтримати музей" href="#" svgSpriteId="support_icon" />
  </BoxButton>
);
