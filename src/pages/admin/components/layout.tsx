import * as React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppProvider } from '@toolpad/core/react-router-dom';
import { NavigateOptions, Navigation, Router } from '@toolpad/core';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Outlet, useLocation, useNavigate, useRoutes } from 'react-router-dom';

const NAVIGATION: Navigation = [
  // {
  //   kind: 'header',
  //   title: 'Main items',
  // },
  {
    segment: 'admin',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'admin/orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
];

const BRANDING = {
  title: 'Quản trị hệ thống',
};

const AUTHENTICATION = {
  signIn: () => {},
  signOut: () => {},
};
export default function AdminLayoutComponent() {
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const searchParams = new URLSearchParams(useLocation().search);

  const router: Router = React.useMemo(
    () => ({
      navigate: (url: string | URL, options?: NavigateOptions) => {
        navigate(url.toString());
      },
      pathname,
      searchParams,
    }),
    [navigate, pathname, searchParams]
  );

  return (
    <AppProvider navigation={NAVIGATION} branding={BRANDING} router={router} authentication={AUTHENTICATION}>
      <DashboardLayout>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
