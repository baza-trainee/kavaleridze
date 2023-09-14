import { styled, Typography, Box, Container } from '@mui/material';

export const ContentBlock = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  minHeight: '413px',

  [theme.breakpoints.up('md')]: {
    height: '456px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '500px',
  },
  gap: '32px',
}));
export const WrapperContent = styled(Box)(() => ({
  height: 'calc(100vh - 112px)',
  background:
    'linear-gradient(90deg, rgba(0, 0, 0, 0.70) 28.24%, rgba(0, 0, 0, 0.50) 53.35%, rgba(0, 0, 0, 0.00) 70.25%), url("./images/hero/section_hero_bg.jpg") lightgray 50% / cover no-repeat',
}));
export const Title = styled(Typography)(({ theme }) => ({
  whiteSpace: 'pre',
  color: theme.palette.common.white,
  fontWeight: 500,
  fontSize: '24px',
}));
