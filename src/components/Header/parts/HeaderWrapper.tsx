import { FC, PropsWithChildren } from 'react';
import { Stack, StackProps } from '@mui/material';

const HeaderWrapper: FC<PropsWithChildren<StackProps>> = ({ children, ...props }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ width: '100%', py: { xs: 2, md: 2, lg: 3 }, px: { xs: 2, md: 5, lg: 10 } }}
      {...props}>
      {children}
    </Stack>
  );
};
export default HeaderWrapper;
