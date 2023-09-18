import Link, { LinkProps } from '@mui/material/Link';
import { Container, Box, styled, useMediaQuery, Typography, Breadcrumbs } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { routing } from '../../assets/siteData';
import SvgSpriteIcon from '../Common/SvgSpriteIcon';
import { theme } from '../../theme';

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

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const maxItemsBreadcrumbs = isSmallScreen ? 2 : 10;

  return (
    <BreadcrumbsBox>
      <Container>
        <BreadcrumbsNav
          maxItems={maxItemsBreadcrumbs}
          separator={<SvgSpriteIcon svgSpriteId="breadcrumbsSeparator_icon" />}
          aria-label="breadcrumb">
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
