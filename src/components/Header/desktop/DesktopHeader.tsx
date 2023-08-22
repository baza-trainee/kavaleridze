import { FC } from 'react';
import { Divider } from '@mui/material';
import Info from '../parts/Info';
import HeaderLogo from '../parts/HeaderLogo';
import Search from '../parts/Search';
import NavMenu from '../parts/NavMenu';
import LangPanel from '../parts/LangPanel';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import HeaderWrapper from '../parts/HeaderWrapper';

const DesktopHeader: FC = () => {
  return (
    <>
      <HeaderWrapper alignItems="flex-start">
        <Info />
        <HeaderLogo />
        <PrimaryButton href="/" svgSpriteId="ticket_icon" title="Квитки" />
      </HeaderWrapper>

      <HeaderWrapper alignItems="center" position="relative">
        <Divider flexItem sx={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
        <Search width={301} />
        <NavMenu />
        <LangPanel />
      </HeaderWrapper>
    </>
  );
};

export default DesktopHeader;
