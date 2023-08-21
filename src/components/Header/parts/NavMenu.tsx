import { FC } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemSecondaryAction,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';

import { menu } from './nav';

interface NavMenuProps {
  secondaryAction?: () => void;
}

const NavMenu: FC<NavMenuProps> = ({ secondaryAction }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <List
      disablePadding
      sx={{
        display: 'grid',
        gap: '40px',
        fontFamily: 'Kyiv Type',
        fontSize: '18px',
        gridTemplate: { xs: 'repeat(4, auto)/1fr', lg: '1fr/repeat(4, auto)' },
      }}
    >
      {menu.map((item) => (
        <ListItem
          key={item.title}
          disablePadding
          sx={{
            width: 'auto',
          }}
        >
          <ListItemButton
            href={item.href}
            disableRipple
            sx={{
              padding: 0,
              '&:hover': { color: (theme) => theme.palette.primary.main },
            }}
          >
            {item.title}
          </ListItemButton>
          {!isDesktop && item.title === 'Іван Кавалерідзе' && (
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                color="inherit"
                onClick={secondaryAction}
              >
                <SvgSpriteIcon svgSpriteId="searchArrow_icon" />
              </IconButton>
            </ListItemSecondaryAction>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default NavMenu;
