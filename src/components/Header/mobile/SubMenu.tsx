import { Button, List, ListItem, ListItemButton, Stack } from '@mui/material';
import { FC } from 'react';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';
import Info from '../parts/Info';

interface SubMenuProps {
  onClick: () => void;
}

const SubmenuItem = ({ title, href }: { title: string; href: string }) => {
  return (
    <ListItem disableGutters disablePadding>
      <ListItemButton disableGutters href={href} sx={{ height: { xs: 'auto', md: 40 }, px: { sx: 0, md: 2 } }}>
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
          sx={{ fontSize: 16, justifyContent: 'flex-start', mb: 2, px: { xs: 0, md: 2 } }}
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
        <PrimaryButton href="/" svgSpriteId="ticket_icon" title="Квитки" sx={{ width: '280px' }} />
      </Stack>

      <Info />
    </Stack>
  );
};

export default SubMenu;
