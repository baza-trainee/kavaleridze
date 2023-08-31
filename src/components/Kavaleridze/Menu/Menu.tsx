import { FC } from 'react';
import { MenuList, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import data from '../../../assets/siteData';

const {
  menuList: { burgerSubMenu },
} = data;
const Menu: FC = () => {
  return (
    <MenuList>
      {burgerSubMenu.map(({ href, title }) => (
        <MenuItem key={title}>
          <Link to={href}>{title}</Link>
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default Menu;
