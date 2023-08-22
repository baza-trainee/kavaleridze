import { FC, PropsWithChildren, forwardRef, Ref } from 'react';
import { Dialog, Stack, IconButton, DialogContent } from '@mui/material';
import DialogTransition from '../parts/DialogTransition';
import LangPanel from '../parts/LangPanel';
import Search from '../parts/Search';
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
      <DialogContent sx={{ padding: 0 }}>
        <Stack gap={6} sx={{ height: '100%' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <LangPanel />

            <IconButton onClick={onClose} color="inherit" aria-label="close" sx={{ padding: 0 }}>
              <SvgSpriteIcon svgSpriteId="burgerOpen_icon" fontSize="medium" />
            </IconButton>
          </Stack>
          <Search width="100%" />
          <Stack flex="1 1 auto">{children}</Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default MobileDialog;

// pt:{ xs: 5, md: '44px' }, pb:6, px:{ xs: 2, md: 5 }
