import { Button, Link, styled } from '@mui/material';

export const AllEventsButton = styled(Button)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 600,
  fontFamily: 'Raleway',
  padding: 0,
  backgroundColor: 'transparent',
  color: 'inherit',
  [theme.breakpoints.up('md')]: {
    fontSize: '18px',
  },

  '.img': {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
}));
