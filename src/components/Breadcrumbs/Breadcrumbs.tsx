import Link, { LinkProps } from '@mui/material/Link';
import { Box, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { routing } from '../../assets/siteData';
import SvgSpriteIcon from '../PrimaryButton/SvgSpriteIcon';
import Container from '@mui/material/Container';

const BreadcrumbsBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  width: '100%',
}));

const BreadcrumbsNav = styled(Breadcrumbs)(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.common.white,
  padding: '16px 0',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 500,
}));

interface RoutingProps {
  title: string;
  href: string;
}

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const createBreadcrumbNameMap = (routing: RoutingProps[]) => {
  const breadcrumbsList: { [key: string]: string } = {};
  routing.map((route) => {
    breadcrumbsList[route.href] = route.title;
  });

  return breadcrumbsList;
};

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink as any} />;
}

function Page() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <BreadcrumbsBox>
      <Container>
        <BreadcrumbsNav separator={<SvgSpriteIcon svgSpriteId="breadcrumbsSeparator_icon" />} aria-label="breadcrumb" color="red">
          <LinkRouter underline="hover" color="inherit" to="/">
            Головна
          </LinkRouter>
          {pathnames.map((_value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            const breadcrumbNameMap = createBreadcrumbNameMap(routing);

            return last ? (
              <Typography sx={{ color: '#151514', fontSize: 'inherit', fontWeight: 'inherit' }} key={to}>
                {breadcrumbNameMap[to]}
              </Typography>
            ) : (
              <LinkRouter underline="hover" color="inherit" to={to} key={to}>
                {breadcrumbNameMap[to]}
              </LinkRouter>
            );
          })}
        </BreadcrumbsNav>
      </Container>
    </BreadcrumbsBox>
  );
}

export default Page;
