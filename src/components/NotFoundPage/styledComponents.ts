import { Box, BoxProps, Stack, StackProps, Typography, TypographyProps, styled } from '@mui/material';

const ImageBox = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  margin: '0px auto',
  width: '463px',
  height: '390px',

  [theme.breakpoints.only('md')]: {
    width: '380px',
    height: '333px',
  },
  [theme.breakpoints.only('sm')]: {
    width: '160px',
    height: '132px',
  },
}));

const Text404 = styled(Typography)<TypographyProps>(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  fontSize: '13.75rem',
  fontWeight: 800,
  lineHeight: 1,
  width: '100%',
  [theme.breakpoints.only('md')]: {
    fontSize: '11.25rem',
  },
  [theme.breakpoints.only('sm')]: {
    fontSize: '4rem',
  },
}));

const ContentBox = styled(Box)<BoxProps>(({ theme }) => ({
  padding: '120px 0',
  [theme.breakpoints.only('md')]: {
    padding: '80px 0',
  },
  [theme.breakpoints.only('sm')]: {
    padding: '60px 0',
  },
}));

const Error404Box = styled(Box)<BoxProps>(({ theme }) => ({
  paddingBottom: '20px',
  [theme.breakpoints.only('lg')]: {
    paddingBottom: '28px',
  },
}));

const SupportTextBox = styled(Stack)<StackProps>(({ theme }) => ({
  alignItems: 'center',
  textAlign: 'center',
  rowGap: '28px',
  [theme.breakpoints.only('md')]: {
    rowGap: '20px',
  },
  [theme.breakpoints.only('sm')]: {
    rowGap: '16px',
  },
}));

const SupportTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 300,
  [theme.breakpoints.only('lg')]: {
    fontSize: '3rem',
    letterSpacing: '3.36px',
  },
}));
const SupportSubTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 500,
  maxWidth: '725px',
  fontSize: '2.25rem',
  lineHeight: 1.1,
  [theme.breakpoints.only('lg')]: {
    letterSpacing: '2.52px',
    fontSize: '2.25rem',
    lineHeight: 1.1,
  },
  [theme.breakpoints.only('md')]: {
    fontSize: '1.25rem',
    lineHeight: 1.1,
    fontWeight: 600,
  },
  [theme.breakpoints.only('sm')]: {
    fontSize: '1.125rem',
    lineHeight: 1.1,
    fontWeight: 600,
  },
}));

export { ContentBox, Error404Box, ImageBox, SupportSubTitle, SupportTextBox, SupportTitle, Text404 };
