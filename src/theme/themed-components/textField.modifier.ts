import { inputAdornmentClasses } from '@mui/material/InputAdornment';
import { inputBaseClasses } from '@mui/material/InputBase';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { Components, Theme } from '@mui/material/styles';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      defaultProps: {
        size: 'small',
      },

      ...(ownerState.size === 'small' && { height: '44px' }),
      ...(ownerState.size === 'medium' && { height: '56px' }),

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
      '--TextField-brandBorderColor': theme.palette.common.black,
      '--TextField-brandBorderHoverColor': theme.palette.text.secondary,
      '--TextField-brandBorderFocusedColor': theme.palette.primary.dark,

      '&  .css-1ai984g-MuiInputBase-root-MuiOutlinedInput-root': {
        height: '180px',
        color: theme.palette.common.black,
        opacity: 1,
        padding: '16px 20px',
      },
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
        border: 'solid 1px',
        borderColor: 'var(--TextField-brandBorderFocusedColor)',
      },
    },
  },
};
