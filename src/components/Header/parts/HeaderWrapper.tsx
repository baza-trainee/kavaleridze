import { FC, PropsWithChildren } from 'react';
import { Stack, StackProps } from '@mui/material';

const HeaderWrapper: FC<PropsWithChildren<StackProps>> = ({
  children,
  ...props
}) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ width: '100%', padding: { xs: '16px', lg: '24px 48px' } }}
      {...props}
    >
      {children}
    </Stack>
  );
};
export default HeaderWrapper;
