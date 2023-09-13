import { FC } from 'react';
import { Container, Typography } from '@mui/material';

const MainSlider: FC = () => {
  return <>
    
    <Container>
      <Typography variant="h1" mb={{ xs: 3, md: 4, lg: 5 }} mx="auto" maxWidth={715} textAlign="center">
       Вас вітає музей-майстерня Івана Кавалерідзе!
      </Typography>
    </Container>;
  </> 
};

export default MainSlider;
