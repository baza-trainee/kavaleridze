import { Typography, styled, Box } from '@mui/material';

export const DataInfo = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '28px',
  color: theme.palette.text.secondary,

  // [theme.breakpoints.down('lg')]: {
  //   padding: '0px 40px',
  // },
  // [theme.breakpoints.down('md')]: {
  //   padding: '0px  16px',
  // },
}));

export const CardsTitle = styled('h3')(() => ({
  fontFamily: 'Kyiv Type',
  fontSize: '24px',
  fontWeight: '500',
  lineHeight: '28px',
  color: '#000000',

  // [theme.breakpoints.down('lg')]: {
  //   padding: '0px 40px',
  // },
  // [theme.breakpoints.down('md')]: {
  //   padding: '0px  16px',
  // },
}));

export const EventData = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '28px',
  color: theme.palette.primary.contrastText,

  // [theme.breakpoints.down('lg')]: {
  //   padding: '0px 40px',
  // },
  // [theme.breakpoints.down('md')]: {
  //   padding: '0px  16px',
  // },
}));

export const WrapperImg = styled(Box)(({ theme }) => ({
  backgroundColor: 'blue',
  width: '642px',
  height: '412px',

  '& img': {
    display: 'block',
    width: '100%',
    height: '412px',
    objectFit: 'cover',
  },
}));

export const EventDescription = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '400',
  lineHeight: '28px',
  color: '#000000',

  img: {
    display: 'block',
    cursor: 'pointer',
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
  },

  // [theme.breakpoints.down('lg')]: {
  //   padding: '0px 40px',
  // },
  // [theme.breakpoints.down('md')]: {
  //   padding: '0px  16px',
  // },
}));
