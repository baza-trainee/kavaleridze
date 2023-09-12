import { List, ListItem, Typography, styled } from '@mui/material';

export const FamousList = styled(List)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(6,1fr)',
  gridGap: theme.spacing(3),
}));
export const BigGridItem = styled(ListItem)({
  gridColumn: 'span 3',
  padding: '0',
});
export const TopTextBlock = styled(BigGridItem)({
  d: 'flex',
  flexDirection: 'column',
  maxWidth: '452px',
  gap: '16px',
});
export const SmallGridItem = styled(ListItem)({
  gridColumn: 'span 2',
  padding: '0',
});
export const ImgArt = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});
export const Title  = styled(Typography)({
  fontWeight:500
})