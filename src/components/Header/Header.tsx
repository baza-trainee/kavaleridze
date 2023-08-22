import { FC } from 'react';
import {
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
  styled,
} from '@mui/material';

import MobileHeader from './mobile/MobileHeader';
import DesktopHeader from './desktop/DesktopHeader';

const Offset = styled('div')(({ theme }) => ({
  ...theme.header.mobile,
  [theme.breakpoints.up('lg')]: { ...theme.header.desktop },
}));

const Header: FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <AppBar component="header" position="fixed">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {isDesktop ? <DesktopHeader /> : <MobileHeader />}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default Header;
