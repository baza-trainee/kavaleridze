import { FC, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import MobileDialog from './MobileDialog';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';

const TabletSearch: FC = () => {
  const [searchEl, setSearchEl] = useState(false);

  const onOpenSearchMenu = () => {
    setSearchEl(true);
  };

  const onCloseSearchMenu = () => {
    setSearchEl(false);
  };

  return (
    <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
      <IconButton
        aria-label="search menu icon"
        onClick={onOpenSearchMenu}
        color="inherit"
        sx={{ padding: 0 }}
      >
        <SvgSpriteIcon svgSpriteId="search_icon" />
      </IconButton>
      <MobileDialog state={searchEl} onClose={onCloseSearchMenu}>
        Other content
      </MobileDialog>
    </Box>
  );
};

export default TabletSearch;
