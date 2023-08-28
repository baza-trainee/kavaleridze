import { FC } from 'react';
import { Divider } from '@mui/material';
import HeaderLogo from '../parts/HeaderLogo';
import MobileMenu from './MobileMenu';
import HeaderWrapper from '../parts/HeaderWrapper';

const MobileHeader: FC = () => {
  return (
    <HeaderWrapper alignItems="center" position="relative">
      <HeaderLogo />
      <MobileMenu />
      <Divider sx={{ position: 'absolute', bottom: '0', left: '0', right: '0' }} />
    </HeaderWrapper>
  );
};

export default MobileHeader;
