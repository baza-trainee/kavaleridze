import { FC, useState, useRef } from 'react';
import { Box, IconButton, useTheme, useMediaQuery, Slide } from '@mui/material';
import SvgSpriteIcon from '../../PrimaryButton/SvgSpriteIcon';
import NavMenu from '../parts/NavMenu';
import SubMenu from '../parts/SubMenu';
import MobileDialog from './MobileDialog';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MobileMenu: FC = () => {
  const [menuEl, setMenuEl] = useState(false);
  const [subMenuEl, setSubMenuEl] = useState(false);

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));

  const onOpenNavMenu = () => {
    setMenuEl(true);
  };

  const onCloseNavMenu = () => {
    setMenuEl(false);
  };

  return (
    <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
      <IconButton
        aria-label="mobile menu icon"
        onClick={onOpenNavMenu}
        color="inherit"
        sx={{
          padding: 0,
          '& .icon': {
            width: { xs: 32, md: 24 },
            height: { xs: 32, md: 24 },
          },
        }}
      >
        {isTablet ? (
          <SvgSpriteIcon svgSpriteId="burgerSearch_icon" />
        ) : (
          <SvgSpriteIcon svgSpriteId="burgerSearch_icon" />
        )}
      </IconButton>
      <MobileDialog state={menuEl} onClose={onCloseNavMenu}>
        <NavMenu secondaryAction={() => {}} />
      </MobileDialog>
    </Box>
  );
};

export default MobileMenu;
