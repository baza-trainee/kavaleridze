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

const BreadcrumbsNav = styled(Breadcrumbs)({
  padding: '16px 0',
  textDecoration: 'none',
});

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
  return <Link {...props} component={RouterLink} />;
}

function Page() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <BreadcrumbsBox>
      <Container>
        <BreadcrumbsNav separator={<SvgSpriteIcon svgSpriteId="breadcrumbsSeparator_icon" />} aria-label="breadcrumb">
          <LinkRouter underline="hover" color="inherit" to="/">
            Головна
          </LinkRouter>
          {pathnames.map((_value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            const breadcrumbNameMap = createBreadcrumbNameMap(routing);

            return last ? (
              <Typography variant="breadcrumbs" sx={{ color: (theme) => theme.palette.common.black }} key={to}>
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
