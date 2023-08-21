import { FC } from 'react';
import { Box, List, ListItem, ListItemButton, IconButton } from '@mui/material';
import { submenu } from './nav';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';

interface SubMenuProps {
  onClick: () => void;
}

const SubMenu: FC<SubMenuProps> = ({ onClick }) => {
  return (
    <Box>
      <IconButton
        edge="end"
        aria-label="delete"
        color="inherit"
        onClick={onClick}
      >
        <SvgSpriteIcon svgSpriteId="searchArrow_icon" />
      </IconButton>
      <List>
        {submenu.map((item) => (
          <ListItem disableGutters disablePadding key={item.title}>
            <ListItemButton href={item.href}>{item.title}</ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SubMenu;
