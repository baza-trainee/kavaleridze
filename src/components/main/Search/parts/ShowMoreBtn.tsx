import { Box, BoxProps, Button, ButtonProps, styled } from '@mui/material';
import { FC } from 'react';

const ButtonBox = styled(Box)<BoxProps>(({ theme }) => ({
  margin: '0 auto',
  [theme.breakpoints.up('xs')]: {
    width: '288px',
    paddingTop: '24px',
  },
  [theme.breakpoints.up('md')]: {
    width: '248px',
    paddingTop: '32px',
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: '44px',
  },
}));

const ShowMoreBtn: FC<ButtonProps> = ({ onClick }) => {
  return (
    <ButtonBox>
      <Button onClick={onClick} variant="secondary" fullWidth sx={{ lineHeight: 1.61 }}>
        Показати більше
      </Button>
    </ButtonBox>
  );
};

export default ShowMoreBtn;
