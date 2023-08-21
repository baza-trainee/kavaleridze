import { Box, Divider, useMediaQuery, useTheme } from '@mui/material';

import { FooterBottom } from './FooterBottom.tsx';
import { ListContacts, ListNavigation } from './FooterListItem.tsx';
import { ButtonBlok, MainIconBlok } from './IconButton.tsx';
import TabletFooter from './TabletFooter.tsx';
import { FooterTop, Wrapper } from './styleComponents.tsx';

export const Footer = () => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.only('md'));
  return (
    <Box
      sx={{
        maxWidth: '1490px',
        margin: '0 auto',
        py: 5,
      }}
      component={'footer'}>
      <Wrapper>
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
      </Wrapper>
      <Divider />
      {/* FooterBottom */}
      <Wrapper>
        <FooterBottom />
      </Wrapper>
    </Box>
  );
};
