import { Components } from '@mui/material';
import { MuiButton } from './themed-components/button.modifier';
import { MuiIconButton } from './themed-components/iconButton.modifier';
import { MuiContainer } from './themed-components/container.modifier';
import { MuiAppBar } from './themed-components/appBar.modifier';
import { MuiInputBase, MuiOutlinedInput, MuiTextField } from './themed-components/textField.modifier';
import { MuiSvgIcon } from './themed-components/svgIcon.modifier';
import { MuiListItemButton } from './themed-components/list.modifier';

import { Theme } from '@mui/material/styles';

export const components: Components<Theme> = {
  MuiButton,
  MuiIconButton,
  MuiContainer,
  MuiAppBar,
  MuiInputBase,
  MuiOutlinedInput,
  MuiTextField,
  MuiSvgIcon,
  MuiListItemButton,
};

export { MuiContainer };
