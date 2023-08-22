import { Box, Divider, useMediaQuery, useTheme } from '@mui/material';

import { FooterBottom } from './FooterBottom.tsx';
import { ListContacts, ListNavigation } from './FooterListItem.tsx';
import { ButtonBlok, MainIconBlok } from './IconButton.tsx';
import TabletFooter from './TabletFooter.tsx';
import { FooterTop, WrapperFooter } from './styleComponents.tsx';

export const Footer = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.only('md'));
  return (
    <Box component={'footer'}>
      <WrapperFooter>
        <FooterTop>
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
        </FooterTop>
      </WrapperFooter>
      <Divider />
      {/* FooterBottom */}

      <FooterBottom />
    </Box>
  );
};
