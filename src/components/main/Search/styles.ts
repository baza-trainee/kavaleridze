import { Box, BoxProps, TextField, TextFieldProps, styled } from '@mui/material';

export const ContentBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    paddingBottom: '60px',
  },
  [theme.breakpoints.up('md')]: {
    paddingBottom: '80px',
  },
  [theme.breakpoints.up('lg')]: {
    paddingBottom: '120px',
  },
}));

export const SearchInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '&.MuiTextField-root': {
    [theme.breakpoints.up('xs')]: {
      padding: '24px 0 16px 0',
    },
    [theme.breakpoints.up('md')]: {
      padding: '32px 0 16px 0',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '56px 0 16px 0',
    },
  },
  '& .MuiInput-input': {
    color: theme.palette.common.black,

    [theme.breakpoints.up('xs')]: {
      fontSize: '0.875rem',
    },
    [theme.breakpoints.up('md')]: {
      lineHeight: 1.2,
      fontSize: '1.125rem',
    },
  },
  '& .MuiInput-root': {
    padding: '8px 0',

    '&:before': {
      borderBottom: `1px solid ${theme.palette.text.secondary}`,
      marginLeft: '25px',
    },
    '&:hover:not(.Mui-disabled, .Mui-error):before': {
      borderBottom: `1px solid ${theme.palette.primary.dark}`,
    },
  },
}));
