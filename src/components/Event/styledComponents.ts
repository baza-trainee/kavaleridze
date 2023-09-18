import { Box, BoxProps, styled } from '@mui/material';

const ContentBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.only('lg')]: {
    paddingBottom: '120px',
  },
  [theme.breakpoints.only('md')]: {
    paddingBottom: '80px',
  },
  [theme.breakpoints.only('sm')]: {
    paddingBottom: '60px',
  },
}));

export { ContentBox };
