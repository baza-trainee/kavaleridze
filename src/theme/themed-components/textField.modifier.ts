import { Components, Theme } from '@mui/material/styles';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
  styleOverrides: {
    root: {
      height: '44px',

      '& .MuiInputBase-input': {
        lineHeight: '24px',
        outline: 'none',

        '&::placeholder': {
          opacity: 1,
        },
      },

      '& .MuiInputAdornment-root': {
        color: 'inherit',
      },
    },
  },
};

export const MuiTextField: Components<Theme>['MuiTextField'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderRadius: '24px',
          borderColor: '#fff',
        },
        '&:hover fieldset': {
          borderColor: theme.palette.text.secondary,
        },

        '&.Mui-focused fieldset': {
          border: '1px solid',
          borderColor: theme.palette.primary.main,
        },
      },
    }),
  },
};

export const MuiOutlinedInput: Components<Theme>['MuiOutlinedInput'] = {
  styleOverrides: {
    root: {
      padding: '8px',
    },
  },
};
