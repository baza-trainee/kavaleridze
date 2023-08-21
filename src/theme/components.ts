import { Components } from '@mui/material';
import { MuiButton } from './themed-components/button.modifier';
import { MuiContainer } from './themed-components/container.modifier';
import { MuiAppBar } from './themed-components/appBar.modifier';
import {
  MuiInputBase,
  MuiOutlinedInput,
  MuiTextField,
} from './themed-components/textField.modifier';

import { Theme } from '@mui/material/styles';

export const components: Components<Theme> = {
  MuiButton,
  MuiContainer,
  MuiAppBar,
  MuiInputBase,
  MuiOutlinedInput,
  MuiTextField,
};

export { MuiContainer };
