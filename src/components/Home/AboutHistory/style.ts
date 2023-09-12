import { Box, styled } from '@mui/material';
import GeneralButton from '../../GeneralButton/GeneralButton';

export const InfoWrapper = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(2 , 1fr)',
  rowGap: '32px',
  columnGap: '24px',
});
export const Img = styled('img')({
  maxWidth: '100%',
  gridColumn: '1 / 3',
});
export const Button = styled(GeneralButton)(({ theme }) => ({
 ...theme.typography.body1,
  justifySelf: 'end',
  alignItems: 'end',
  fontWeight: 600,

}));
