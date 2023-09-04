import { Box, Divider, Link, Stack, Typography, styled, useTheme } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { routing } from '../../assets/siteData';

const ContentBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  rowGap: '8px',
  maxWidth: '670px',
}));

interface SearchListItemProps {
  route: string;
  title: string;
  text?: string;
  key?: string | number;
}

const SearchListItem: FC<SearchListItemProps> = ({ route, title, text }) => {
  const theme = useTheme();

  const mainRoute = route.split('/').filter((x) => x)[0];

  const getRouteTitle = (route: string): string => {
    return routing.find((el) => el.href === route).title || '';
  };

  return (
    <Box component={'li'}>
      {/* section link */}
      <ContentBox>
        <Typography component={'p'} sx={{ fontSize: '1rem', fontWeight: 400, color: theme.palette.text.secondary }}>
          Перейти на сторінку "
          <Link sx={{ color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }} component={RouterLink} to={`/${mainRoute}`}>
            {getRouteTitle(route)}"
          </Link>
        </Typography>
        {/* main link */}
        <Stack spacing={1} component={RouterLink} to={`${route}`}>
          <Typography component={'p'} sx={{ fontSize: '1.5rem', lineHeight: 1.2 }}>
            {title}
          </Typography>
          <Typography
            component={'p'}
            sx={{
              fontSize: {
                lg: '1.125rem',
                md: '1rem',
                sm: '0.875rem',
              },
              lineHeight: 1.5,
            }}>
            {text}
          </Typography>
        </Stack>
      </ContentBox>
      <Divider
        sx={{
          width: '100%',
          height: '1px',
          bgcolor: theme.palette.gray.main,
          borderColor: theme.palette.gray.main,
          mt: '8px',
        }}
      />
    </Box>
  );
};

export default SearchListItem;
