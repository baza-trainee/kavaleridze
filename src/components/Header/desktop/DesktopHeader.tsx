import { FC } from 'react';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import Info from '../parts/Info';
import HeaderLogo from '../parts/HeaderLogo';
import Search from '../parts/SearchInput';
import NavMenu from '../parts/NavMenu';
import LangPanel from '../parts/LangPanel';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import HeaderWrapper from '../parts/HeaderWrapper';
import DesktopNavMenu from './DesktopNavMenu';

const DesktopHeader: FC = () => {
  return (
    <>
      <HeaderWrapper alignItems="flex-start">
        <Info />
        <HeaderLogo />
        <PrimaryButton component={Link} to="/tickets" svgSpriteId="ticket_icon" title="Квитки" />
      </HeaderWrapper>
      <Divider flexItem sx={{ position: 'absolute', top: 128, left: 0, right: 0 }} />
      <HeaderWrapper alignItems="center" position="relative" justifyContent="flex-end">
        <Search />
        <NavMenu>
          <DesktopNavMenu />
        </NavMenu>
        <LangPanel />
      </HeaderWrapper>
    </>
  );
};

export default DesktopHeader;
