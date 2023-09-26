import { Container, styled } from '@mui/material';

export const Wrapper = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyItems: 'center',
  alignItems: 'center',
  gap: '60px',
  padding: '60px 0!important',
    [theme.breakpoints.up('md')]: {
        gap: '80px',
      padding: '80px 0',
    },
    [theme.breakpoints.up('lg')]: {
        gap: '120px',
      padding: '120px 0',
    },
}));
