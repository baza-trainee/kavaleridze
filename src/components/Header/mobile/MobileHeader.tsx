import { FC } from 'react';
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import HeaderLogo from '../parts/HeaderLogo';
import MobileMenu from './MobileMenu';
import HeaderWrapper from '../parts/HeaderWrapper';
import TabletSearch from './TabletSearch';

const MobileHeader: FC = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <HeaderWrapper alignItems="center" borderBottom="1px solid">
      <HeaderLogo />
      <Stack direction="row" gap="20px">
        {isTablet && <TabletSearch />}
        <MobileMenu />
      </Stack>
    </HeaderWrapper>
  );
};

export default MobileHeader;
