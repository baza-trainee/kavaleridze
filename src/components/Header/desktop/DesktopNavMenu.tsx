import { FC } from 'react';
import { useTheme, ListItem, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import useActiveLink from '../../../hooks/useActiveLink';

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
  const isActiveLink = useActiveLink(href);

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
          color: isActiveLink ? theme.palette.primary.main : theme.palette.text.primary,
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
        <NavMenuItem href={href} title={title} key={title} />
      ))}
    </>
  );
};

export default DesktopNavMenu;
