import { FC } from 'react';
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, useTheme, useMediaQuery } from '@mui/material';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';

interface NavMenuProps {
  secondaryAction?: () => void;
}

interface NavMenuItemProp {
  href: string;
  title: string;
}

const NavMenuItem: FC<NavMenuItemProp> = ({ href, title }) => {
  return (
    <ListItem
      disablePadding
      sx={{
        width: 'auto',
      }}>
      <ListItemButton
        href={href}
        sx={{
          px: 0,
          py: { sx: 1, lg: 0 },
        }}>
        {title}
      </ListItemButton>
    </ListItem>
  );
};

const NavMenu: FC<NavMenuProps> = ({ secondaryAction }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <List
      disablePadding
      sx={{
        display: 'grid',
        gap: { xs: 2, md: 3, lg: 5 },
        fontFamily: 'Kyiv Type',
        fontSize: { md: '16px', lg: '18px' },
        gridTemplate: { xs: 'repeat(4, auto)/1fr', lg: '1fr/repeat(4, auto)' },
      }}>
      {!isDesktop && <NavMenuItem href="/" title="Головна" />}
      <NavMenuItem href="/" title="Історія музею" />
      <NavMenuItem href="/" title="Події" />
      {isDesktop ? (
        <NavMenuItem href="/" title="Іван Кавалерідзе" />
      ) : (
        <ListItem
          disablePadding
          sx={{
            width: 'auto',
          }}>
          <ListItemButton
            onClick={() => {
              secondaryAction && secondaryAction();
            }}
            sx={{
              px: 0,
              py: 1,
            }}>
            <ListItemText>Іван Кавалерідзе</ListItemText>
            <ListItemIcon sx={{ minWidth: 24, color: 'inherit' }}>
              <SvgSpriteIcon svgSpriteId="arrowRight_icon" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      )}
      <NavMenuItem href="/contacts" title="Контакти" />
    </List>
  );
};

export default NavMenu;
