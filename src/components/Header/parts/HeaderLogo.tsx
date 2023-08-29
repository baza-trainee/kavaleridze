import { FC } from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '/Logo.svg';

const HeaderLogo: FC = () => {
  return (
    <Link to="/" style={{ lineHeight: 0 }}>
      <Box component="img" src={logo} alt="Logo" />
    </Link>
  );
};

export default HeaderLogo;
