import { Components, Theme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
  }
}

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    variant: 'primary',
  },
  styleOverrides: {
    root: {
      //TODO: add styling for primary button
    },
    endIcon: {
      marginRight: 0,
      marginLeft: 0,
    },
  },
};
