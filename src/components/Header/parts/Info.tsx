import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';

const Info: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '13px',
        alignItems: { xs: 'center', lg: 'start' },
      }}
    >
      <Typography
        variant="body1"
        component="p"
        sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
      >
        <SvgSpriteIcon svgSpriteId="clock_icon" />
        Вт-Нд 11:00 – 18:00
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
      >
        <SvgSpriteIcon svgSpriteId="location_icon" />
        Київ, Андріївський узвіз, 21
      </Typography>
    </Box>
  );
};

export default Info;
