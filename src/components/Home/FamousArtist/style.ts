import { List, ListItem, Typography, styled } from '@mui/material';
const styles = {
  overflow: 'hidden',

  padding: 0,
  backgroundRepeat: 'no-repeat',
  borderRadius: '4px',
};
export const FamousList = styled(List)(({ theme }) => ({
  display: 'grid',
  justifyContent: 'center',
   padding: '60px 0',
   gridTemplateRows:'min-content repeat(5,minmax(100px , 168px))',
  [theme.breakpoints.up('md')]: {
    padding: '80px 0',
    gridTemplateRows:'172px 240px 172px',
    gridTemplateColumns: 'repeat(6,1fr)',
  }, [theme.breakpoints.up('lg')]: {
    padding: '120px 0',
    gridTemplateRows:'260px 400px 260px',
    gridTemplateColumns: 'repeat(6,1fr)',
  },

  gridGap: theme.spacing(3),
}));
export const BigGridItem = styled(ListItem)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    gridColumn: 'span 3',

  },

  ...styles,
}));
export const SmallGridItem = styled(ListItem)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    gridColumn: 'span 2',

  },
  ...styles,
}));
export const TopTextBlock = styled(BigGridItem)({
  d: 'flex',
  flexDirection: 'column',
  maxWidth: '452px',
  gap: '16px',

});
export const BottomtTextBlock = styled(SmallGridItem)(({ theme }) => ({

  width:'75%',
  [theme.breakpoints.up('md')]: {
    alignSelf: 'end',
    width:'100%'
  },
}));

export const ImgArt = styled('img')({
  objectFit: 'cover',
  height: '100%',
  width: '100%',
});
export const Title = styled(Typography)({
  fontWeight: 500,
});
