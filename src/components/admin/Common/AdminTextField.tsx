import { TextField, TextFieldProps, styled } from '@mui/material';

const AdminTextField = styled(TextField)<TextFieldProps>(() => ({
  fieldset: {
    borderRadius: '8px',
  },
  '.MuiOutlinedInput-root': {
    height: '52px',
    padding: '12px 16px',
    lineHeight: 1.5,
  },
}));

export default AdminTextField;
