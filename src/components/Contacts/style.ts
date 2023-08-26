import { List, styled, ListItem, Typography, Paper, Link, Button } from '@mui/material';

export const ContactLink = styled(Link)(({  }) => ({
  textDecoration: 'none',
  color: 'inherit',
}));

export const ContactList = styled(List)(({ theme }) => ({
  maxWidth: '736px',
  margin: 'auto',
  color: theme.palette.common.black,
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
}));
export const ContactPaper = styled(Paper)(({ theme }) => ({
  background: theme.palette.common.white,
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  padding: '104px 0',
}));

export const ContactItem = styled(ListItem)(({  }) => ({
  display: 'block',
  borderBottom: `1px solid var(--secondary-gray, #878684)`,
  padding: 0,
}));
export const Title = styled(Typography)(({  }) => ({
  fontSize: '24px',
  fontWeight: 600,
  marginBottom: '16px',
}));
export const Text = styled(Typography)(({  }) => ({
  mb: '16px',
  fontSize: '18px',
  fontWeight: 400,
  marginBottom: '16px',
}));
export const ContactButton = styled(Button)(({  }) => ({
  mb: '16px',
  fontSize: '18px',
  fontWeight: 400,
  marginBottom: '16px',
  textDecoration: 'underline',
  padding: 0,
  color: 'inherit',
}));