import { styled, Typography, Box, Container} from '@mui/material';

export const ContentBlock = styled(Container)(() => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  minHeight: '500px',
  gap: '32px',
}));
export const WrapperContent = styled(Box)(() => ({
  background:
    'linear-gradient(90deg, rgba(0, 0, 0, 0.70) 28.24%, rgba(0, 0, 0, 0.50) 53.35%, rgba(0, 0, 0, 0.00) 70.25%), url("./images/hero/section_hero_bg.jpg") lightgray 50% / cover no-repeat',
}));
export const Title = styled(Typography)(({ theme }) => ({
  maxWidth: '545px',
  color: theme.palette.common.white,
}));



