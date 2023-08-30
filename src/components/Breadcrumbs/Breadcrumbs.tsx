import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';

const Breadcrumbs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pathnames = pathname.split('/').filter(Boolean);

  return (
    <MUIBreadcrumbs separator={<SvgSpriteIcon svgSpriteId="breadcrumbsSeparator_icon" />} aria-label="breadcrumb">
      {pathnames.length ? <Link onClick={() => navigate('/')}>Home</Link> : <Typography> Home </Typography>}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography key={name}>{name}</Typography>
        ) : (
          <Link key={name} onClick={() => navigate(routeTo)}>
            {name}
          </Link>
        );
      })}
      {/* <SvgSpriteIcon svgSpriteId="clock_icon" /> */}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
