import {} from '@emotion/react';
import { Box, Container, InputAdornment, TextField, Typography, styled, useTheme } from '@mui/material';
import { FC } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';
import Section from '../Section/Section';

const Search: FC = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('request');
  const { palette } = useTheme();

  const CustomTextField = styled(TextField)(({ theme, ...props }) => ({
    '& .MuiInputBase-root': {
      height: 38,
      // width: '100%',
      color: theme.palette.common.black,

      '&:before': {
        borderBottom: `1px solid ${theme.palette.text.secondary}`,
      },
    },
  }));

  return (
    <Section variant="light">
      <Container>
        <Typography component={'p'} sx={{ fontSize: '0.875rem', py: '16px', mb: '55px' }}>
          there should be breadcrumbs
        </Typography>
        <Box component={'form'} sx={{ mb: '70px' }}>
          <CustomTextField
            fullWidth={true}
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgSpriteIcon sx={{ color: palette.text.secondary }} svgSpriteId="search_icon" />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        {/* <Box sx={{ px: 3, py: 3 }}>
          <Typography> Here is search results.</Typography>
          <Typography mb={4}>Search: {search?.split('-').join(' ')}</Typography>
          <PrimaryButton component={Link} href="/" title="Повернутись на головну" svgSpriteId="arrowLeft_icon" />
        </Box> */}
      </Container>
    </Section>
  );
};

export default Search;
