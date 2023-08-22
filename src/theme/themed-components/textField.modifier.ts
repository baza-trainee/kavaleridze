import { Components, Theme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { inputAdornmentClasses } from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      height: '44px',

      [`& .${inputBaseClasses.input}`]: {
        lineHeight: '24px',
        outline: 'none',

        '&:placeholder': {
          opacity: 1,
          color: theme.palette.text.secondary,
        },
      },

      [`& .${inputAdornmentClasses.root}`]: {
        color: 'inherit',
      },
    }),
  },
};

export const MuiTextField: Components<Theme>['MuiTextField'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '--TextField-brandBorderColor': theme.palette.common.white,
      '--TextField-brandBorderHoverColor': theme.palette.common.white,
      '--TextField-brandBorderFocusedColor': theme.palette.common.white,
    }),
  },
};

export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    notchedOutline: {
      borderColor: 'var(--TextField-brandBorderColor)',
      borderRadius: '24px',
    },
    root: {
      padding: '8px',
      [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: 'var(--TextField-brandBorderHoverColor)',
      },
      [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
        border: '1px solid',
        borderColor: 'var(--TextField-brandBorderFocusedColor)',
      },
    },
  },
};
