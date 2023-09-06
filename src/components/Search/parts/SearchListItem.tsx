import { Box, Divider, Link, Typography, styled, useTheme } from '@mui/material';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { routing } from '../../../assets/siteData';

const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  rowGap: '16px',
  [theme.breakpoints.up('lg')]: {
    maxWidth: '800px',
  },
  [theme.breakpoints.between('md', 'lg')]: {
    maxWidth: '670px',
  },
}));

interface SearchListItemProps {
  route: string;
  title: string;
  description?: string;
  key?: string | number;
}

const SearchListItem: FC<SearchListItemProps> = ({ route, title, description }) => {
  const theme = useTheme();
  const mainRoute = route.split('/').filter((x) => x)[0];

  const getRouteTitle = (route: string): string => {
    return routing.find((el) => el.href === route)?.title || '';
  };

  return (
    <Box component={'li'}>
      <ContentBox>
        <Typography variant="body2" component={'p'} sx={{ color: theme.palette.text.secondary }}>
          Перейти на сторінку "
          <Link sx={{ color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }} component={RouterLink} to={`/${mainRoute}`}>
            {getRouteTitle(route)}"
          </Link>
        </Typography>
        <Typography
          component={RouterLink}
          to={`${route}`}
          variant="subhead"
          sx={{
            fontWeight: 600,
            '&:hover': {
              color: theme.palette.primary.dark,
            },
          }}>
          {title}
        </Typography>
        {description?.length && (
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
            {description}
          </Typography>
        )}
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
