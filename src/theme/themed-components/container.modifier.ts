import { Components, Theme } from '@mui/material/styles';

export const MuiContainer: Components<Theme>['MuiContainer'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      //TODO: write down settings for mobile container: 0px - 767px

      [theme.breakpoints.up('md')]: {
        //TODO: write down settings for tablet container: 768px - 1279px
      },

      [theme.breakpoints.up('lg')]: {
        //TODO: write down settings for desktop container: 1280px+
      },
    }),
  },
};
