import { Components, Theme } from '@mui/material/styles';

export const MuiFab: Components<Theme>['MuiFab'] = {
  defaultProps: {
    disableFocusRipple: true,
    disableRipple: true,
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: 'transparent',
      width: 60,
      height: 60,
      boxShadow: 'none',

      '&:hover': {
        color: theme.palette.primary.dark,
        backgroundColor: 'transparent',
      },

      '&:active': {
        boxShadow: 'none',
      },
    }),
  },
};
