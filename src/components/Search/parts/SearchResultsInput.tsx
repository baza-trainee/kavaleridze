import { Box, InputAdornment, TextField, useTheme } from '@mui/material';
import { ChangeEventHandler, FC, FormEventHandler } from 'react';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';

const MAX_SYMBOLS_INPUT = 120;

interface SearchResultsInputProps {
  inputData: string;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

const SearchResultsInput: FC<SearchResultsInputProps> = ({ inputData, handleChange, onSubmit }) => {
  const { palette } = useTheme();
  const styles = {
    padding: {
      lg: '56px 0 16px 0',
      md: '32px 0 16px 0',
      sm: '24px 0 16px 0',
    },
    '& .MuiInputBase-root': {
      height: {
        lg: 44,
        md: 44,
        xs: 36,
      },
      color: palette.common.black,
      fontSize: {
        lg: '1.125rem',
        md: '1.125rem',
        xs: '0.875rem',
      },

      '&:before': {
        borderBottom: `1px solid ${palette.text.secondary}`,
        marginLeft: '25px',
      },
      '&:hover:not(.Mui-disabled, .Mui-error):before': {
        borderBottom: `1px solid ${palette.primary.dark}`,
      },
    },
  };

  return (
    <Box component={'form'} onSubmit={onSubmit}>
      <TextField
        variant="standard"
        fullWidth
        autoComplete="off"
        value={inputData}
        onChange={handleChange}
        sx={{ ...styles }}
        inputProps={{ maxLength: MAX_SYMBOLS_INPUT }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgSpriteIcon sx={{ color: palette.text.secondary }} svgSpriteId="search_icon" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchResultsInput;
