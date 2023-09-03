import { Box, Button } from '@mui/material';
import { FC } from 'react';

const ShowMoreBtn: FC = () => {
  return (
    <>
      <Box sx={{ textAlign: 'center', padding: '44px 5px 120px' }}>
        <Button variant="secondary" sx={{ width: '248px' }}>
          Показати більше
        </Button>
      </Box>
    </>
  );
};

export default ShowMoreBtn;
