import { Box, Button, ButtonProps } from '@mui/material';
import { FC } from 'react';

interface ShowMoreBtnProps extends ButtonProps {}

const ShowMoreBtn: FC<ShowMoreBtnProps> = ({ onClick }) => {
  return (
    <>
      <Box sx={{ textAlign: 'center', paddingTop: { lg: '44px', md: '32px', sm: '24px' } }}>
        <Button onClick={onClick} variant="secondary" sx={{ width: '248px' }}>
          Показати більше
        </Button>
      </Box>
    </>
  );
};

export default ShowMoreBtn;
