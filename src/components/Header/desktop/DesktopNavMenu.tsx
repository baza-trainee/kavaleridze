import { FC } from 'react';
import { useTheme, ListItem, Box } from '@mui/material';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';

import data from '../../../assets/siteData';

const {
  menuList: { main },
} = data;

const navMenu = main.filter((item) => item.title !== 'Головна');

interface NavMenuItemProp {
  href: string;
  title: string;
}

const NavMenuItem: FC<NavMenuItemProp> = ({ href, title }) => {
  const theme = useTheme();
  const resolved = useResolvedPath(href);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <ListItem
      disablePadding
      sx={{
        width: 'auto',
      }}>
      <Box
        component={Link}
        to={href}
        sx={{
          py: 0,
          width: '100%',
          color: match ? theme.palette.primary.main : theme.palette.text.primary,
          '&:hover': { color: theme.palette.primary.dark },
        }}>
        {title}
      </Box>
    </ListItem>
  );
};

const DesktopNavMenu: FC = () => {
  return (
    <>
      {navMenu.map(({ href, title }) => (
        <NavMenuItem href={href} title={title} />
      ))}
    </>
  );
};

export default DesktopNavMenu;
