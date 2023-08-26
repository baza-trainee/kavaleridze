import { Box, styled, useMediaQuery, useTheme } from '@mui/material';

import FooterBottom from './FooterBottom.tsx';
import { ListContacts, ListNavigation } from './FooterListItem.tsx';
import { ButtonBlok, MainIconBlok } from './IconButton.tsx';
import TabletFooter from './TabletFooter.tsx';

const WrapperFooter = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0px 72px',
  [theme.breakpoints.down('lg')]: {
    padding: '0px 24px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0px ',
  },
}));

const Footer = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.only('md'));
  return (
    <Box component={'footer'}>
      <WrapperFooter>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: { lg: 'row', md: 'column', xs: 'column' },
            width: '100%',
            gap: { xs: 5, md: 0 },
            py: { xs: '40px', lg: '24px' },
          }}>
          {isTablet ? (
            <TabletFooter />
          ) : (
            <>
              {/* Desktop Mobile menu */}
              <MainIconBlok />
              <ListNavigation />
              <ListContacts />
              <ButtonBlok />
            </>
          )}
        </Box>
      </WrapperFooter>
      <Box sx={{ width: '100%', border: 'solid 1px', color: (theme) => theme.palette.text.secondary }} />
      {/* FooterBottom */}
      <WrapperFooter>
        <FooterBottom />
      </WrapperFooter>
    </Box>
  );
};
export default Footer;
