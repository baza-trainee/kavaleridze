import { FC, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Box, TextField, InputAdornment, styled, useTheme, useMediaQuery } from '@mui/material';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';

interface SearchInputProps {
  onCloseMenu?: () => void;
}

const CustomTextField = styled(TextField)(({ theme, value }) => ({
  '& .MuiInputBase-root': {
    height: 44,
    width: '100%',
    color: theme.palette.text.primary,
    transition: theme.transitions.create('width'),

    [theme.breakpoints.up('lg')]: { width: (value as string).length > 0 ? 262 : 132, '&.Mui-focused': { width: 262 } },
  },

  '& .MuiOutlinedInput-root': {
    padding: '8px',
    '& fieldset': {
      borderColor: theme.palette.common.white,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const SearchInput: FC<SearchInputProps> = ({ onCloseMenu }) => {
  const [searchParam] = useSearchParams();

  const [search, setSearch] = useState(() => {
    const search = searchParam.get('request');
    return search ? search : '';
  });

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const navigate = useNavigate();

  useEffect(() => {
    const request = searchParam.get('request');
    if (!request) {
      setSearch('');
    }
  }, [searchParam]);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const request = search.split(' ').join('-');
    if (search.length > 3) {
      if (!isDesktop && onCloseMenu) onCloseMenu();
      navigate(`/search?request=${request}`);
    }
  };

  return (
    <Box component="form" flex="1 1 auto" mr={{ xs: 0, lg: 2 }} sx={{ width: { xs: '100%', lg: 'auto' } }} onSubmit={onSubmit}>
      <CustomTextField
        id="search"
        variant="outlined"
        fullWidth={!isDesktop}
        placeholder="Пошук..."
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

export default SearchInput;
