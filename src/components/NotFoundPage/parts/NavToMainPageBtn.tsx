import { Box, Button, ButtonProps } from '@mui/material';
import { FC } from 'react';

interface NavToMainPageBtnProps extends ButtonProps {}

const NavToMainPageBtn: FC<NavToMainPageBtnProps> = ({ onClick }) => {
  return (
    <Box sx={{ textAlign: 'center', paddingTop: { lg: '120px', md: '80px', sm: '60px' } }}>
      <Button onClick={onClick} variant="primary" sx={{ width: '279px' }}>
        На головну сторінку
      </Button>
    </Box>
  );
};

export default NavToMainPageBtn;
