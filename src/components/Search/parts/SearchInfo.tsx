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
          variant="button"
          sx={{
            fontSize: {
              lg: '2rem',
              md: '1.5rem',
              sm: '1.25rem',
            },
            padding: {
              lg: '55px 0',
              md: '30px 0',
              sm: '24px 0',
            },
            textTransform: 'none',
          }}>
          За запитом “{searchTitle}” знайдено {resultsCount} результатів:
        </Typography>
      ) : (
        <Stack
          spacing={3}
          sx={{
            padding: {
              lg: '55px 0',
              md: '30px 0',
              sm: '24px 0',
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
