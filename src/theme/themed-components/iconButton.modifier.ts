import { Components, Theme } from '@mui/material/styles';


export const MuiIconButton: Components<Theme>['MuiIconButton'] = {
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
    disableFocusRipple: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.text.primary,
      '&:hover': {
        color: theme.palette.primary.main,
      },
    }),
  },
};
