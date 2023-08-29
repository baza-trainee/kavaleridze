import { FC } from 'react';
import { Box, ListItem, Stack, Button, List } from '@mui/material';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';
import Info from '../parts/Info';
import data from '../../../assets/siteData';

const {
  menuList: { burgerSubMenu },
} = data;

interface SubMenuProps {
  closeSubMenu: () => void;
  closeMainMenu: () => void;
}

interface SubmenuItemProps {
  title: string;
  href: string;
  closeMainMenu: () => void;
}

const SubmenuItem: FC<SubmenuItemProps> = ({ title, href, closeMainMenu }) => {
  return (
    <ListItem disableGutters disablePadding sx={{ height: { xs: 'auto', md: 40 }, px: { sx: 0, md: 2 }, py: 1 }}>
      <Box
        component={Link}
        to={href}
        onClick={closeMainMenu}
        sx={{
          color: 'inherit',
          fontFamily: (theme) => theme.typography.body2,
          '&:hover': { color: (theme) => theme.palette.primary.dark },
        }}>
        {title}
      </Box>
      <Link to={href}></Link>
    </ListItem>
  );
};

const SubMenu: FC<SubMenuProps> = ({ closeMainMenu, closeSubMenu }) => {
  return (
    <Stack gap={6}>
      <Stack>
        <Button
          variant="text"
          aria-label="return to main menu"
          onClick={closeSubMenu}
          sx={{ fontSize: 16, justifyContent: 'flex-start', mb: 2, px: { xs: 0, md: 2 } }}
          startIcon={<SvgSpriteIcon svgSpriteId="arrowLeft_icon" />}>
          Іван Кавалерідзе
        </Button>
        <List disablePadding sx={{ display: 'grid', gap: 2 }}>
          {burgerSubMenu.map(({ href, title }) => (
            <SubmenuItem title={title} href={href} key={title} closeMainMenu={closeMainMenu} />
          ))}
        </List>
      </Stack>

      <Stack alignItems="center">
        <PrimaryButton component={Link} href="/tickets" svgSpriteId="ticket_icon" title="Квитки" sx={{ width: '280px' }} />
      </Stack>

      <Info />
    </Stack>
  );
};

export default SubMenu;
