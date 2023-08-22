import { FC, useState, ChangeEvent } from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';

interface SearchProps {
  width: number | string;
}
const Search: FC<SearchProps> = ({ width }) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Box component="form" sx={{ width: width }}>
      <TextField
        id="search"
        variant="outlined"
        fullWidth
        placeholder="Введіть Ваш запит..."
        value={search}
        onChange={onChangeSearch}
        autoComplete="off"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SvgSpriteIcon svgSpriteId="search_icon" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Search;
