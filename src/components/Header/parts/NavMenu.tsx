import { FC, PropsWithChildren } from 'react';

import { List } from '@mui/material';

const NavMenu: FC<PropsWithChildren> = ({ children }) => {
  return (
    <List
      disablePadding
      sx={{
        display: 'grid',
        gap: { xs: 2, md: 3, lg: '60px' },
        fontFamily: 'Kyiv Type',
        fontSize: { md: '16px', lg: '18px' },
        gridTemplate: { xs: 'repeat(5, auto)/1fr', lg: '1fr/repeat(4, auto)' },
      }}>
      {children}
    </List>
  );
};

export default NavMenu;
