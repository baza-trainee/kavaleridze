import { Box, Stack, styled } from '@mui/material';
import { ListContacts, ListNavigation } from './FooterListItem';
import { ButtonBlok, MainIconBlok } from './IconButton';

export const MyBoxTabletStyle = styled(Box)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('lg')]: {
    justifyContent: 'space-between',
    margin: '25px 0',
  },
}));

export default function TabletFooter() {
  return (
    <Stack direction="column" justifyContent="space-between" width="100%">
      <MyBoxTabletStyle>
        <MainIconBlok />
        <ButtonBlok />
      </MyBoxTabletStyle>
      <MyBoxTabletStyle>
        <ListNavigation />
        <ListContacts />
      </MyBoxTabletStyle>
    </Stack>
  );
}
