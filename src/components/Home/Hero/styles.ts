import { styled, Box, Container } from '@mui/material';

export const ContentBlock = styled(Container)({
  height: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  // minHeight: '413px',

  // [theme.breakpoints.up('md')]: {
  //   height: '456px',
  // },
  // [theme.breakpoints.up('lg')]: {
  //   height: '500px',
  // },
  gap: '32px',
});
export const WrapperContent = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${theme.header.mobile.minHeight}px - 10px)`,

  [theme.breakpoints.up('lg')]: {
    height: `calc(100vh -  ${theme.header.desktop.minHeight}px - 20px)`,
  },
  background:
    'linear-gradient(90deg, rgba(0, 0, 0, 0.70) 28.24%, rgba(0, 0, 0, 0.50) 53.35%, rgba(0, 0, 0, 0.00) 70.25%), url("./images/hero/section_hero_bg.jpg") lightgray 50% / cover no-repeat',
}));
