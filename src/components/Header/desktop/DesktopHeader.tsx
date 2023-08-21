import { FC } from 'react';
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
      <HeaderWrapper alignItems="flex-start" borderBottom="1px solid">
        <Info />
        <HeaderLogo />
        <PrimaryButton href="/" svgSpriteId="ticket_icon" title="Квитки" />
      </HeaderWrapper>

      <HeaderWrapper alignItems="center">
        <Search width={301} />
        <NavMenu />
        <LangPanel />
      </HeaderWrapper>
    </>
  );
};

export default DesktopHeader;
