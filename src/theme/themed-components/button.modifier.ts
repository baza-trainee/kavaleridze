import { Components, Theme } from '@mui/material/styles'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true
  }
}

export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    variant: 'primary',
  },
  styleOverrides: {
    root: {
      textTransform: 'none',
      borderRadius: 24,
      padding: '8px 28px',
      minWidth: 204,
    },
    endIcon: {
      marginRight: 0,
      marginLeft: 8,
    },
  },
}
