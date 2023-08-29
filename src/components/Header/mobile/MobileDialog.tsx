import { FC, PropsWithChildren } from 'react';
import { Dialog, Stack, IconButton } from '@mui/material';
import DialogTransition from '../parts/DialogTransition';
import LangPanel from '../parts/LangPanel';
import SearchInput from '../parts/SearchInput';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';

interface MobileDialogProps {
  state: boolean;
  onClose: () => void;
}

const MobileDialog: FC<PropsWithChildren<MobileDialogProps>> = ({ state, onClose, children }) => {
  return (
    <Dialog
      fullScreen
      open={state}
      onClose={onClose}
      TransitionComponent={DialogTransition}
      PaperProps={{ sx: { pt: { xs: 5, md: '44px' }, pb: 6, px: { xs: 2, md: 5 } } }}>
      <Stack gap={6}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <LangPanel />
          <IconButton onClick={onClose} color="inherit" aria-label="close" sx={{ padding: 0 }}>
            <SvgSpriteIcon svgSpriteId="burgerOpen_icon" fontSize="medium" />
          </IconButton>
        </Stack>
        <SearchInput onCloseMenu={onClose} />
        {children}
      </Stack>
    </Dialog>
  );
};

export default MobileDialog;
