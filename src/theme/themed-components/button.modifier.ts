import { Components, Theme } from '@mui/material/styles';
import { svgIconClasses } from '@mui/material/SvgIcon';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
  }
}
export const MuiButton: Components<Theme>['MuiButton'] = {
  defaultProps: {
    variant: 'primary',
    disableRipple: true,
    disableTouchRipple: true,
    disableFocusRipple: true,
  },
  styleOverrides: {
    root: {
      textTransform: 'none',
    },
    endIcon: {
      marginRight: 0,
      marginLeft: 8,
      '& > *:first-child': {
        fontSize: '1.5rem',
      },
    },
  },
  variants: [
    {
      props: { variant: 'primary' },
      style: ({ theme }) => ({
        borderRadius: 24,
        padding: '8px 28px',
        minWidth: 204,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.paper,

        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
        },
      }),
    },
    {
      props: { variant: 'text' },
      style: ({ theme }) => ({
        color: theme.palette.primary.main,
        '&:hover': {
          color: theme.palette.primary.dark,
          backgroundColor: 'transparent',
        },
      }),
    },
  ],
};
