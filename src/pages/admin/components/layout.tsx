import * as React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppProvider } from '@toolpad/core/react-router-dom';
import { Navigation } from '@toolpad/core';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Outlet, useRoutes } from 'react-router-dom';

const NAVIGATION: Navigation = [
  // {
  //   kind: 'header',
  //   title: 'Main items',
  // },
  {
    segment: '',
    title: 'Dashboard',
    action: '/admin',
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
  return (
    <AppProvider navigation={NAVIGATION} branding={BRANDING} router={undefined} authentication={AUTHENTICATION}>
      <DashboardLayout>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
