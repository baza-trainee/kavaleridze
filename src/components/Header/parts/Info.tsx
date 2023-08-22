import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';

const Info: FC = () => {
  return (
    <Stack direction="column" gap={1} alignItems={{ xs: 'center', lg: 'start' }}>
      <Typography variant="body1" component="p" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SvgSpriteIcon svgSpriteId="clock_icon" />
        Вт-Нд 11:00 – 18:00
      </Typography>
      <Typography variant="body1" component="p" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <SvgSpriteIcon svgSpriteId="location_icon" />
        Андріївський узвіз, 21, Київ
      </Typography>
    </Stack>
  );
};

export default Info;
