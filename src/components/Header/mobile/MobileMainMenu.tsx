import { FC } from 'react';
import { useTheme, Box, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';
interface MobileMainMenuProp {
  title: string;
  href: string;
  openSubMenu: () => void;
  closeMainMenu: () => void;
}

const MobileMainMenu: FC<MobileMainMenuProp> = ({ title, href, openSubMenu, closeMainMenu }) => {
  const theme = useTheme();
  const resolved = useResolvedPath(href);
  const match = useMatch({ path: resolved.pathname, end: true });

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
          color: match ? theme.palette.primary.main : theme.palette.text.primary,
          '&:hover': { color: theme.palette.primary.dark },
        }}>
        {title}
      </Box>
    </ListItem>
  );
};

export default MobileMainMenu;
