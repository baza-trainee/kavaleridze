import { Box, BoxProps, Stack, StackProps, Typography, TypographyProps, styled } from '@mui/material';

const ImageBox = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  margin: '0px auto',
  width: '280px',
  height: '250px',

  [theme.breakpoints.only('md')]: {
    width: '224px',
    height: '210px',
  },
  [theme.breakpoints.only('sm')]: {
    width: '160px',
    height: '140px',
  },
}));

const Text404 = styled(Typography)<TypographyProps>(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  fontSize: '7.5rem',
  fontWeight: 800,
  lineHeight: 1,
  width: '100%',
  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  textAlign: 'center',
  [theme.breakpoints.only('md')]: {
    fontSize: '6.25rem',
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
  paddingBottom: '35px',
  [theme.breakpoints.only('md')]: {
    paddingBottom: '30px',
  },
  [theme.breakpoints.only('sm')]: {
    paddingBottom: '25px',
  },
}));

const SupportTextBox = styled(Stack)<StackProps>(({ theme }) => ({
  alignItems: 'center',
  textAlign: 'center',
  rowGap: '24px',
  [theme.breakpoints.only('sm')]: {
    rowGap: '16px',
  },
}));

export { ContentBox, Error404Box, ImageBox, SupportTextBox, Text404 };
