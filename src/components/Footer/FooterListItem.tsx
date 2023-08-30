import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Link as MuiLink, Stack, styled, useTheme } from '@mui/material';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import data from '../../assets/siteData';
import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';

const {
  menuList: { main },
} = data;

const { phone, email, location, workingHours } = data.general;
interface IListTextProps {
  title: string;
  svg: string;
}
interface IListLinkTextProps {
  title: string;
  svg?: string;
  href: string;
}

const MyList = styled(List)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '0px',
  margin: '0px',
}));

export const TypographyList = styled(MuiLink)(({ theme }) => ({
  lineHeight: '21.13px',
  fontSize: '18px',
  color: 'inherit',
  textDecoration: 'none',

  [theme.breakpoints.down('lg')]: {
    fontSize: '16px',
    lineHeight: '18.78px',
  },
}));
const ListNavigation = ({ title, href }: IListLinkTextProps) => {
  const resolved = useResolvedPath(href);
  const match = useMatch({ path: resolved.pathname, end: true });
  const theme = useTheme();
  return (
    <ListItem key={title} disablePadding>
      <ListItemButton sx={{ p: '0px' }}>
        <Link to={href}>
          <ListItemText
            primary={
              <TypographyList
                sx={{
                  color: match ? theme.palette.primary.main : theme.palette.text.primary,
                  '&:hover': { color: theme.palette.primary.dark },
                }}>
                {title}
              </TypographyList>
            }></ListItemText>
        </Link>
      </ListItemButton>
    </ListItem>
  );
};

export const NavRedder = () => (
  <MyList disablePadding>
    {main.map(({ href, title }: IListLinkTextProps) => (
      <ListNavigation key={href} title={title} href={href} />
    ))}
  </MyList>
);

const ListTypography = ({ title, svg }: IListTextProps) => (
  <ListItem disablePadding>
    <ListItemIcon sx={{ minWidth: '32px', color: 'inherit' }}>
      <SvgSpriteIcon svgSpriteId={svg}></SvgSpriteIcon>
    </ListItemIcon>
    <ListItemText primary={<TypographyList>{title}</TypographyList>}></ListItemText>
  </ListItem>
);
export const ListContacts = () => (
  <MyList sx={{ py: 1 }}>
    <ListContactItem href={`tel:${phone}`} title={phone} svg="phone_icon" />
    <ListContactItem href={`mailto:${email}`} title={email} svg="email_icon" />
    <ListTypography title={location} svg="location_icon" />
    <ListTypography title={workingHours} svg="clock_icon" />
  </MyList>
);

const ListContactItem = ({ title, svg = '', href = '#' }: IListLinkTextProps) => {
  return (
    <ListItem disablePadding>
      <Link to={href}>
        <Stack
          sx={{
            ':hover': {
              color: (theme) => theme.palette.primary.main,
            },
          }}
          gap={1}
          direction={'row'}>
          <SvgSpriteIcon svgSpriteId={svg}></SvgSpriteIcon>
          <TypographyList>{title}</TypographyList>
        </Stack>
      </Link>
    </ListItem>
  );
};
