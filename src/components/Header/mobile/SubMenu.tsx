import { FC } from 'react';
import { List, ListItem, ListItemButton, Button, Stack } from '@mui/material';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import Info from '../parts/Info';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';

interface SubMenuProps {
  onClick: () => void;
}

const SubmenuItem = ({ title, href }: { title: string; href: string }) => {
  return (
    <ListItem disableGutters disablePadding>
      <ListItemButton disableGutters href={href} sx={{ height: { xs: 'auto', md: 40 } }}>
        {title}
      </ListItemButton>
    </ListItem>
  );
};

const SubMenu: FC<SubMenuProps> = ({ onClick }) => {
  return (
    <Stack gap={6}>
      <Stack>
        <Button
          variant="text"
          aria-label="return to main menu"
          onClick={onClick}
          sx={{ fontSize: 16, justifyContent: 'flex-start', mb: 2 }}
          startIcon={<SvgSpriteIcon svgSpriteId="arrowLeft_icon" />}>
          Іван Кавалерідзе
        </Button>
        <List disablePadding sx={{ display: 'grid', gap: 2 }}>
          <SubmenuItem title="Митець" href="/" />
          <SubmenuItem title="Біографія" href="/" />
          <SubmenuItem title="Кіно" href="/" />
          <SubmenuItem title="Скульптура" href="/" />
          <SubmenuItem title="Митець і Київ" href="/" />
        </List>
      </Stack>

      <Stack alignItems="center">
        <PrimaryButton href="/" svgSpriteId="ticket_icon" title="Квитки" componentWidth={280} />
      </Stack>

      <Info />
    </Stack>
  );
};

export default SubMenu;
