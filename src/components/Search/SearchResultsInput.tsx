import { Box, InputAdornment, TextField, useTheme } from '@mui/material';
import { ChangeEventHandler, FC, FormEventHandler } from 'react';
import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';

interface SearchResultsInputProps {
  inputData: string;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

const SearchResultsInput: FC<SearchResultsInputProps> = ({ inputData, handleChange, onSubmit }) => {
  const { palette } = useTheme();
  const styles = {
    padding: {
      lg: '55px 0 15px 0',
      md: '32px 0 15px 0',
      sm: '24px 0 15px 0',
    },
    '& .MuiInputBase-root': {
      height: 38,
      color: palette.common.black,
      fontSize: '1.125rem',

      '&:before': {
        borderBottom: `1px solid ${palette.text.secondary}`,
        marginLeft: '25px',
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
