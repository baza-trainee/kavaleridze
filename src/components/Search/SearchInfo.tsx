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
        <Typography component={'p'} variant="button" sx={{ fontSize: '2rem', padding: '55px 0', textTransform: 'none' }}>
          За запитом “{searchTitle}” знайдено {resultsCount} результатів:
        </Typography>
      ) : (
        <Stack spacing={3} sx={{ padding: '55px 0' }}>
          <Typography component={'p'} variant="button" sx={{ fontSize: '2rem', textTransform: 'none' }}>
            На жаль, за Вашим запитом “{searchTitle}” нічого не знайдено.
          </Typography>
          <Typography component={'p'} sx={{ fontSize: '1.125rem', fontWeight: 400, lineHeight: 1.2 }}>
            Будь ласка, перевірте правильність написання і повторіть спробу ще раз або використайте інші ключові слова.
          </Typography>
        </Stack>
      )}
    </>
  );
};

export default SearchInfo;
