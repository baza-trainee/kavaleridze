import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';
import { Link } from 'react-router-dom';

import { listsItem } from './mock';
import { SvgIconHover, TypographyList } from './styleComponents';

interface IList {
  href: string;
  title: string;
}
interface IListTextProps {
  title: string;
  svg: string;
}
interface IListLinkTextProps {
  title: string;
  svg?: string;
  href: string;
}

export const MyList = styled(List)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}));
export const ListNavigation = () => (
  <MyList>
    {listsItem.map(({ title, href }: IList) => {
      return (
        <ListItem
          key={title}
          sx={{
            '&:hover': {
              color: '#F0B92D',
            },
          }}
          disablePadding>
          <ListItemButton disableTouchRipple>
            <Link to={href}>
              <ListItemText primary={<TypographyList>{title}</TypographyList>}></ListItemText>
            </Link>
          </ListItemButton>
        </ListItem>
      );
    })}
  </MyList>
);
export const ListContacts = () => (
  <MyList>
    <ListContactItem href="tel:044 425-33-97" title="044 425-33-97" svg="phone_icon" />
    <ListContactItem href="mailto:kavaleridzemuseum@gmail.com" title="kavaleridzemuseum@gmail.com" svg="email_icon" />
    <ListTypography title="Андріївський узвіз, 21 Київ" svg="location_icon" />
    <ListTypography title="Вт-Нд 11:00 – 18:00" svg="clock_icon" />
  </MyList>
);
export const ListContactItem = ({ title, svg, href = '#' }: IListLinkTextProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        href={href}
        sx={{
          '&:hover': {
            color: (theme) => theme.palette.text.secondary,
          },
        }}
        disableTouchRipple>
        <ListItemIcon sx={{ minWidth: '44px' }}>
          <SvgIconHover>
            <use href={`/sprite.svg#${svg}`}></use>
          </SvgIconHover>
        </ListItemIcon>
        <ListItemText primary={<TypographyList>{title}</TypographyList>}></ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
export const ListTypography = ({ title, svg }: IListTextProps) => (
  <ListItem>
    <ListItemIcon sx={{ minWidth: '44px' }}>
      <SvgIconHover>
        <use href={`/sprite.svg#${svg}`}></use>
      </SvgIconHover>
    </ListItemIcon>
    <ListItemText primary={<TypographyList>{title}</TypographyList>}></ListItemText>
  </ListItem>
);
