import { Box, Divider, styled, useMediaQuery, useTheme } from '@mui/material';

import { FooterBottom } from './FooterBottom.tsx';
import { ListContacts, ListNavigation } from './FooterListItem.tsx';
import { ButtonBlok, MainIconBlok } from './IconButton.tsx';
import TabletFooter from './TabletFooter.tsx';

const WrapperFooter = styled(Box)(({ theme }) => ({
  maxWidth: '1190px',
  margin: '0 auto',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    padding: '0px 35px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 16px',
  },
}));

export const Footer = () => {
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
            [theme.breakpoints.down('md')]: {
              width: '100%',
              padding: '50px 0',
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
      <Divider />
      {/* FooterBottom */}
      <WrapperFooter>
        <FooterBottom />
      </WrapperFooter>
    </Box>
  );
};
