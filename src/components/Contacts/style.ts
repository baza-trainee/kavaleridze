import { List, styled, ListItem, Typography, Box, Link, Button } from '@mui/material';

export const ContactLink = styled(Link)({
  // mb: '16px',
  // fontSize: '14px',
  // fontWeight: 400,
  color: 'inherit',
  display: 'inline-block',
  textDecoration: 'none',
  marginBottom: '16px',
  // [theme.breakpoints.up('md')]: {
  //   fontSize: '18px',
  // },
});

export const ContactList = styled(List)(({ theme }) => ({
  maxWidth: '736px',
  margin: 'auto',
  color: theme.palette.common.black,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
}));

export const ContactPaper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  padding: '24px 0 60px',

  [theme.breakpoints.up('md')]: {
    padding: '48px 0 80px',
  },

  [theme.breakpoints.up('lg')]: {
    padding: '48px 0 120px',
  },
}));

export const ContactItem = styled(ListItem)(({ theme }) => ({
  display: 'block',
  borderBottom: '1px solid',
  borderBottomColor: theme.palette.gray.dark,
  padding: 0,
}));

export const Title = styled(Typography)({
  display: 'block',
  // fontSize: '18px',
  // fontWeight: 600,
  marginBottom: '16px',

  // [theme.breakpoints.up('md')]: {
  //   fontSize: '20px',
  // },
  // [theme.breakpoints.up('lg')]: {
  //   fontSize: '24px',
  // },
});
export const BoxContact = styled(Box)({
  fontSize: '14px',
  fontWeight: 400,
  marginBottom: '16px',
});

export const Paragraph = styled(Typography)({
  // fontSize: '14px',
  margin: 0,
  // lineHeight: '28px',
  // [theme.breakpoints.up('md')]: {
  //   fontSize: '18px',
  // },
});

export const ContactButton = styled(Button)({
  marginBottom: '16px',
  // mb: '16px',

  padding: 0,
  color: 'inherit',
  // fontSize: '14px',
  // fontWeight: 400,
  // fontFamily: 'Raleway',
  // [theme.breakpoints.up('md')]: {
  //   fontSize: '18px',
  // },
});
