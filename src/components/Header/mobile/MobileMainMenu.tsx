import { FC } from 'react';
import { Stack } from '@mui/material';
import NavMenu from '../parts/NavMenu';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import Info from '../parts/Info';

interface MobileMainMenuProp {
  action: () => void;
}

const MobileMainMenu: FC<MobileMainMenuProp> = ({ action }) => {
  return (
    <Stack gap={6}>
      <NavMenu secondaryAction={action} />
      <Stack alignItems="center">
        <PrimaryButton href="/" svgSpriteId="ticket_icon" title="Квитки" componentWidth={280} />
      </Stack>

      <Info />
    </Stack>
  );
};

export default MobileMainMenu;
