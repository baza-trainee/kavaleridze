import { FC } from 'react';
import { Box, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import useActiveLink from '../../../hooks/useActiveLink';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';
interface MobileMainMenuProp {
  title: string;
  href: string;
  openSubMenu: () => void;
  closeMainMenu: () => void;
}

const MobileMainMenu: FC<MobileMainMenuProp> = ({ title, href, openSubMenu, closeMainMenu }) => {
  const isActiveLink = useActiveLink(href);

  if (title === 'Іван Кавалерідзе') {
    return (
      <ListItem key={href} disableGutters disablePadding>
        <ListItemButton
          onClick={openSubMenu}
          sx={{
            px: 0,
            py: 1,

            display: ' flex',
            justifyContent: 'space-between',
            color: (theme) => (isActiveLink ? theme.palette.primary.main : theme.palette.text.primary),
            '&:hover': { color: (theme) => theme.palette.primary.dark },
          }}>
          {title}
          <ListItemIcon sx={{ minWidth: 24, color: 'inherit', position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)' }}>
            <SvgSpriteIcon svgSpriteId="arrowRight_icon" />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    );
  }
  return (
    <ListItem key={href} disableGutters disablePadding>
      <Box
        component={Link}
        to={href}
        onClick={closeMainMenu}
        sx={{
          height: { xs: 'auto', md: 40 },
          py: 1,
          width: '100%',
          color: (theme) => (isActiveLink ? theme.palette.primary.main : theme.palette.text.primary),
          '&:hover': { color: (theme) => theme.palette.primary.dark },
        }}>
        {title}
      </Box>
    </ListItem>
  );
};

export default MobileMainMenu;
