import { FC } from 'react';
import { Stack, useMediaQuery, useTheme, Divider } from '@mui/material';
import HeaderLogo from '../parts/HeaderLogo';
import MobileMenu from './MobileMenu';
import HeaderWrapper from '../parts/HeaderWrapper';
import TabletSearch from './TabletSearch';

const MobileHeader: FC = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <HeaderWrapper alignItems="center" position="relative">
      <HeaderLogo />
      <Stack direction="row" gap="20px">
        {isTablet && <TabletSearch />}
        <MobileMenu />
      </Stack>
      <Divider sx={{ position: 'absolute', bottom: '0', left: '0', right: '0' }} />
    </HeaderWrapper>
  );
};

export default MobileHeader;
