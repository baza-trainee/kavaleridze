import { FC, useState } from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import MobileDialog from './MobileDialog';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';
import Info from '../parts/Info';

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
      <IconButton aria-label="search menu icon" onClick={onOpenSearchMenu} color="inherit" sx={{ padding: 0 }}>
        <SvgSpriteIcon svgSpriteId="search_icon" />
      </IconButton>
      <MobileDialog state={searchEl} onClose={onCloseSearchMenu}>
        <Stack gap={6}>
          <Typography>Search Results</Typography>
          <Stack alignItems="center">
            <PrimaryButton href="/" svgSpriteId="ticket_icon" title="Квитки" componentWidth={280} />
          </Stack>
          <Info />
        </Stack>
      </MobileDialog>
    </Box>
  );
};

export default TabletSearch;
