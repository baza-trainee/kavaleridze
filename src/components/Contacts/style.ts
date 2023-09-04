import { List, styled, ListItem, Typography, Box, Link, Button } from '@mui/material';

export const ContactLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
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

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 600,
  marginBottom: '16px',

  [theme.breakpoints.up('md')]: {
    fontSize: '22px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '24px',
  },
}));
export const Text = styled(Typography)(({ theme }) => ({
  mb: '16px',
  fontSize: '14px',
  fontWeight: 400,
  marginBottom: '16px',
  [theme.breakpoints.up('md')]: {
    fontSize: '18 px',
  },
}));

export const ContactButton = styled(Button)({
  mb: '16px',
  fontSize: '18px',
  fontWeight: 400,
  marginBottom: '16px',
  textDecoration: 'underline',
  padding: 0,
  color: 'inherit',
});
