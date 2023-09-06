import { Components, Theme } from '@mui/material/styles';
import darkScrollbar from '@mui/material/darkScrollbar';

export const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
  styleOverrides: (theme) => ({
    body: { ...darkScrollbar, backgroundColor: theme.palette.common.white, color: theme.palette.common.black },
  }),
};
