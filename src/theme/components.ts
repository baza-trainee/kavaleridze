import { Components } from '@mui/material';
import { MuiAppBar } from './themed-components/appBar.modifier';
import { MuiButton } from './themed-components/button.modifier';
import { MuiContainer } from './themed-components/container.modifier';
import { MuiFab } from './themed-components/fab.modifier';
import { MuiIconButton } from './themed-components/iconButton.modifier';
import { MuiListItemButton } from './themed-components/list.modifier';
import { MuiSvgIcon } from './themed-components/svgIcon.modifier';
import { MuiInputBase, MuiOutlinedInput, MuiTextField } from './themed-components/textField.modifier';
import { MuiTooltip } from './themed-components/tooltip.modifier';
import { MuiCssBaseline } from './themed-components/cssBaseline.modifier';
import { MuiTypography } from './themed-components/typography.modifier';

import { Theme } from '@mui/material/styles';

export const components: Components<Theme> = {
  MuiCssBaseline,
  MuiButton,
  MuiContainer,
  MuiSvgIcon,
  MuiAppBar,
  MuiIconButton,
  MuiInputBase,
  MuiOutlinedInput,
  MuiTextField,
  MuiListItemButton,
  MuiFab,
  MuiTooltip,
  MuiTypography,
};
