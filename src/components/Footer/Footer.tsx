import { Box, styled, useMediaQuery, useTheme } from '@mui/material';

import FooterBottom from './FooterBottom.tsx';
import { ListContacts, ListNavigation } from './FooterListItem.tsx';
import { ButtonBlok, MainIconBlok } from './IconButton.tsx';
import TabletFooter from './TabletFooter.tsx';

const WrapperFooter = styled(Box)(({ theme }) => ({
  maxWidth: '1190px',
  margin: '0 auto',

  [theme.breakpoints.down('lg')]: {
    padding: '0px 35px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 16px',
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
            padding: '20px 0px',
            width: '100%',
            margin: '0 -10px',
            [theme.breakpoints.down('md')]: {
              width: '100%',
              padding: '30px 0',
              flexDirection: 'column',
              gap: '40px',
            },
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
