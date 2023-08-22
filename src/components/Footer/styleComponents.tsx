import { Box, SvgIcon, Typography, styled } from '@mui/material';
import { ReactNode } from 'react';

export const WrapperFooter = ({ children }: { children: ReactNode }) => <Box sx={{ maxWidth: '1190px', m: '0 auto' }}>{children}</Box>;

export const FooterTop = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 0px',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    padding: '0px 35px',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '50px 0',
    flexDirection: 'column',
    gap: '40px',
  },
}));

export const TypographyList = styled(Typography)(({ theme }) => ({
  lineHeight: '21.13px',
  fontSize: '18px',
  transition: '0.4s',
  color: 'inherit',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    lineHeight: '18.78px',
  },
}));

export const SvgIconHover = styled(SvgIcon)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: '0.5s',
  '&:hover': {
    color: theme.palette.text.secondary,
  },
}));
