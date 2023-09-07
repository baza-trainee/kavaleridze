import { Button, Link, styled, Box } from '@mui/material';

export const LinkWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  fontSize: '18px',
  fontWeight: 600,
  fontFamily: 'Raleway',
  padding: 0,
  // backgroundColor: 'transparent',
  color: 'inherit',

  ':hover': {
    cursor: 'pointer',
    color: theme.palette.primary.main,
    // backgroundColor: 'transparent',
  },
  // [theme.breakpoints.up('md')]: {
  //   fontSize: '18px',
  // },
}));
