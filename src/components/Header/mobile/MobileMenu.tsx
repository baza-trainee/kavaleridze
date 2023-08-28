import { FC, useState, useRef, useEffect } from 'react';
import { Box, IconButton, Slide, Paper } from '@mui/material';

import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';
import MobileMainMenu from './MobileMainMenu';
import SubMenu from './SubMenu';
import MobileDialog from './MobileDialog';

const MobileMenu: FC = () => {
  const [menuEl, setMenuEl] = useState(false);
  const [submenuEl, setSubmenuEl] = useState(false);
  const [slideHeight, setSliderHeight] = useState(0);
  const [initialRef, setInitialRef] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const submenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!initialRef || !menuRef.current || !submenuRef.current) {
      return;
    }
    if (submenuEl) {
      setSliderHeight(submenuRef.current.getBoundingClientRect().height);
    } else {
      setSliderHeight(menuRef.current.getBoundingClientRect().height);
    }
  }, [menuRef, submenuRef, submenuEl, initialRef]);

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
        <SvgSpriteIcon svgSpriteId="burgerSearch_icon" fontSize="medium" />
      </IconButton>
      <MobileDialog state={menuEl} onClose={onCloseNavMenu}>
        <Box position="relative" sx={{ overflow: 'hidden', height: slideHeight > 0 ? slideHeight : 'auto' }} ref={containerRef}>
          <Slide direction="right" in={!submenuEl} container={containerRef.current} appear={false}>
            <Box sx={{ position: 'absolute', top: 0, width: '100%' }}>
              <Paper
                elevation={0}
                ref={(el) => {
                  menuRef.current = el;
                  setInitialRef(true);
                }}>
                <MobileMainMenu action={onOpenSubMenu} />
              </Paper>
            </Box>
          </Slide>

          <Slide direction="left" in={submenuEl} container={containerRef.current}>
            <Box sx={{ position: 'absolute', top: 0, width: '100%' }}>
              <Paper
                sx={{ width: '100%' }}
                elevation={0}
                ref={(el) => {
                  submenuRef.current = el;
                }}>
                <SubMenu onClick={onCloseSubMenu} />
              </Paper>
            </Box>
          </Slide>
        </Box>
      </MobileDialog>
    </Box>
  );
};

export default MobileMenu;
