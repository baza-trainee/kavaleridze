import { FC } from 'react';
import { Box, Link } from '@mui/material';
import logo from '../../../../public/Logo.svg';

const HeaderLogo: FC = () => {
  return (
    <Link sx={{ lineHeight: 0 }} href="/">
      <Box component="img" src={logo} alt="Logo" />
    </Link>
  );
};

export default HeaderLogo;
