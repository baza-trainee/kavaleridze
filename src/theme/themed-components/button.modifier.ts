import { Components, Theme } from '@mui/material/styles'
import { theme } from '..'

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
    root: ({ theme }) => ({
      textTransform: 'none',
      borderRadius: 24,
      padding: '8px 28px',
      minWidth: 204,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    }),
    endIcon: {
      marginRight: 0,
      marginLeft: 8,
    },
  },
}
