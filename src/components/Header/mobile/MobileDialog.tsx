import { FC, PropsWithChildren } from 'react';
import { Dialog, Stack, IconButton } from '@mui/material';
import DialogTransition from '../parts/DialogTransition';
import LangPanel from '../parts/LangPanel';
import Search from '../parts/Search';
import Info from '../parts/Info';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';

interface MobileDialog {
  state: boolean;
  onClose: () => void;
}

const MobileDialog: FC<PropsWithChildren<MobileDialog>> = ({
  state,
  onClose,
  children,
}) => {
  return (
    <Dialog
      fullScreen
      open={state}
      onClose={onClose}
      TransitionComponent={DialogTransition}
    >
      <Stack padding="40px 16px 48px" gap="48px">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <LangPanel />
          <IconButton
            onClick={onClose}
            color="inherit"
            aria-label="close"
            sx={{ padding: 0, '& .icon': { width: 32, height: 32 } }}
          >
            <SvgSpriteIcon svgSpriteId="searchArrow_icon" />
          </IconButton>
        </Stack>
        <Search width="100%" />
        {children}
        <Stack alignItems="center">
          <PrimaryButton href="/" svgSpriteId="ticket_icon" title="Квитки" />
        </Stack>

        <Info />
      </Stack>
    </Dialog>
  );
};

export default MobileDialog;
