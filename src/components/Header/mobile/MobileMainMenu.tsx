import { Stack } from '@mui/material';
import { FC } from 'react';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import Info from '../parts/Info';
import NavMenu from '../parts/NavMenu';

interface MobileMainMenuProp {
  action: () => void;
}

const MobileMainMenu: FC<MobileMainMenuProp> = ({ action }) => {
  return (
    <Stack gap={6}>
      <NavMenu secondaryAction={action} />
      <Stack alignItems="center">
        <PrimaryButton href="/" svgSpriteId="ticket_icon" title="Квитки" sx={{ width: '280px' }} />
      </Stack>

      <Info />
    </Stack>
  );
};

export default MobileMainMenu;
