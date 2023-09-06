import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

interface SearchInfoProps {
  resultsCount: number;
  searchTitle: string;
}

const SearchInfo: FC<SearchInfoProps> = ({ resultsCount, searchTitle }) => {
  return (
    <>
      {resultsCount ? (
        <Typography
          component={'p'}
          variant="h2"
          sx={{
            padding: {
              lg: '44px 0 56px 0',
              md: '32px 0',
              sm: '24px 0',
            },
            textTransform: 'none',
          }}>
          За запитом “{searchTitle}” знайдено {resultsCount} результатів:
        </Typography>
      ) : (
        <Stack
          sx={{
            padding: {
              lg: '44px 0 60px',
              md: '32px 0 60px',
              sm: '24px 0 60px',
            },
            rowGap: {
              lg: '24px',
              md: '16px',
              sm: '16px',
            },
          }}>
          <Typography
            component={'p'}
            variant="button"
            sx={{
              fontSize: {
                lg: '2rem',
                md: '1.5rem',
                sm: '1.25rem',
              },
              textTransform: 'none',
              lineHeight: 1.1,
            }}>
            На жаль, за Вашим запитом “{searchTitle}” нічого не знайдено.
          </Typography>
          <Typography
            component={'p'}
            sx={{
              fontSize: {
                lg: '1.125rem',
                md: '1rem',
                sm: '0.875rem',
              },
              fontWeight: 400,
              lineHeight: 1.5,
            }}>
            Будь ласка, перевірте правильність написання і повторіть спробу ще раз або використайте інші ключові слова.
          </Typography>
        </Stack>
      )}
    </>
  );
};

export default SearchInfo;
