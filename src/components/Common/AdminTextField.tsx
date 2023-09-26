import { InputBase, InputBaseProps, styled } from '@mui/material';

const AdminTextField = styled(InputBase)<InputBaseProps>(({ theme, error }) => ({
  borderRadius: '8px',
  color: theme.palette.common.black,
  minWidth: '358px',
  padding: '12px',
  border: error ? `1px solid ${theme.palette.error.main}` : `1px solid ${theme.palette.common.black}`,

  ':hover': {
    borderColor: error ? theme.palette.error.main : theme.palette.primary.main,
  },
  '.MuiInputBase-input': {
    lineHeight: 1.5,
    height: '27px',
  },
  '&.Mui-focused': {
    borderColor: error ? theme.palette.error.main : theme.palette.common.black,
  },
}));

export default AdminTextField;
