import { MouseEvent } from 'react';
import { Box } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';
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

export const ButtonBlok = () => {
  const navigate = useNavigate();
  const onClickDonation = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('/donation', { replace: true });
  };

  return (
    <Box
      sx={{
        display: 'grid',
        placeItems: { xs: 'center', lg: 'start' },
      }}>
      <PrimaryButton
        sx={{ width: { md: '280px', lg: '261px' } }}
        title="Підтримати музей"
        component={Link}
        onClick={onClickDonation}
        svgSpriteId="support_icon"
      />
    </Box>
  );
};
