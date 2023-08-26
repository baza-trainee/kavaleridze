import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';

interface IListTextProps {
  title: string;
  svg: string;
}
interface IListLinkTextProps {
  title: string;
  svg?: string;
  href: string;
}

const listsItem = [
  {
    href: '/',
    title: 'Головна',
  },
  {
    href: '/',
    title: 'Історія музею',
  },
  {
    href: '/',
    title: 'Події',
  },
  {
    href: '/',
    title: 'Іван Кавалерідзе',
  },
  {
    href: '/contacts',
    title: 'Контакти',
  },
];

const MyList = styled(List)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}));

export const TypographyList = styled(Typography)(({ theme }) => ({
  lineHeight: '21.13px',
  fontSize: '18px',
  color: 'inherit',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    lineHeight: '18.78px',
  },
}));

export const ListNavigation = () => (
  <MyList>
    {listsItem.map(({ title, href }: IListLinkTextProps) => {
      return (
        <ListItem key={title} disablePadding>
          <ListItemButton>
            <Link to={href}>
              <ListItemText primary={<TypographyList>{title}</TypographyList>}></ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
      );
    })}
  </MyList>
);

const ListTypography = ({ title, svg }: IListTextProps) => (
  <ListItem>
    <ListItemIcon sx={{ minWidth: '44px', color: 'inherit' }}>
      <SvgSpriteIcon svgSpriteId={svg}></SvgSpriteIcon>
    </ListItemIcon>
    <ListItemText primary={<TypographyList>{title}</TypographyList>}></ListItemText>
  </ListItem>
);
export const ListContacts = () => (
  <MyList>
    <ListContactItem href="tel:044 425-33-97" title="044 425-33-97" svg="phone_icon" />
    <ListContactItem href="mailto:kavaleridzemuseum@gmail.com" title="kavaleridzemuseum@gmail.com" svg="email_icon" />
    <ListTypography title="Андріївський узвіз, 21, Київ" svg="location_icon" />
    <ListTypography title="Вт-Нд 11:00 – 18:00" svg="clock_icon" />
  </MyList>
);

const ListContactItem = ({ title, svg = '', href = '#' }: IListLinkTextProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton href={href}>
        <ListItemIcon sx={{ minWidth: '44px', color: 'inherit' }}>
          <SvgSpriteIcon svgSpriteId={svg}></SvgSpriteIcon>
        </ListItemIcon>
        <ListItemText primary={<TypographyList>{title}</TypographyList>}></ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
