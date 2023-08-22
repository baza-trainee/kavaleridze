import { FC, useState, useRef } from 'react';
import { Box, IconButton, useTheme, useMediaQuery, Slide, Paper } from '@mui/material';

import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';
import MobileMainMenu from './MobileMainMenu';
import SubMenu from './SubMenu';
import MobileDialog from './MobileDialog';

const MobileMenu: FC = () => {
  const [menuEl, setMenuEl] = useState(false);
  const [submenuEl, setSubmenuEl] = useState(false);
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));

  // console.log('menu height', menuRef.current && menuRef.current.getBoundingClientRect());

  const onOpenNavMenu = () => {
    setMenuEl(true);
  };

  const onCloseNavMenu = () => {
    setMenuEl(false);
    setSubmenuEl(false);
  };

  const onOpenSubMenu = () => {
    setSubmenuEl(true);
  };

  const onCloseSubMenu = () => {
    setSubmenuEl(false);
  };

  return (
    <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
      <IconButton
        aria-label="mobile menu icon"
        onClick={onOpenNavMenu}
        color="inherit"
        sx={{
          padding: 0,
        }}>
        {isTablet ? (
          <SvgSpriteIcon svgSpriteId="burgerClosed_icon " />
        ) : (
          <SvgSpriteIcon svgSpriteId="burgerSearch_icon" fontSize="medium" />
        )}
      </IconButton>
      <MobileDialog state={menuEl} onClose={onCloseNavMenu}>
        <Box position="relative" sx={{ overflowX: 'hidden', height: '100%' }} ref={containerRef}>
          <Slide direction="right" in={!submenuEl} container={containerRef.current} appear={false}>
            <Box sx={{ position: 'absolute', top: 0, width: '100%', minHeight: '100%' }}>
              <Paper sx={{ width: '100%', height: 'auto' }} elevation={0} ref={menuRef}>
                <MobileMainMenu action={onOpenSubMenu} />
              </Paper>
            </Box>
          </Slide>

          <Slide direction="left" in={submenuEl} container={containerRef.current}>
            <Box sx={{ position: 'absolute', top: 0, width: '100%', minHeight: '100%' }}>
              <Paper sx={{ width: '100%', height: 'auto' }} elevation={0}>
                <SubMenu onClick={onCloseSubMenu} />
              </Paper>
            </Box>
          </Slide>
        </Box>

        {/* <SubMenu
          onClick={() => {
            console.log('onClick');
          }}
        /> */}
      </MobileDialog>
    </Box>
  );
};

export default MobileMenu;
