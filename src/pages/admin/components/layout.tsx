import * as React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppProvider } from '@toolpad/core/react-router-dom';
import { Navigation, Router } from '@toolpad/core';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { viVN } from '@mui/material/locale';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { viVN as viDG } from '@mui/x-data-grid/locales';
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
  {
    segment: 'admin/departments',
    title: 'Quản lý phòng khám',
    icon: <MedicalServicesIcon />,
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
      navigate: (url: string | URL) => {
        navigate(url.toString());
      },
      pathname,
      searchParams,
    }),
    [navigate, pathname, searchParams]
  );
  const theme = createTheme(
    {
      palette: {
        primary: { main: '#1976d2' },
      },
    },
    viVN,
    viDG
  );
  return (
    <ThemeProvider theme={theme}>
      <AppProvider
        theme={theme}
        navigation={NAVIGATION}
        branding={BRANDING}
        router={router}
        authentication={AUTHENTICATION}
      >
        <DashboardLayout>
            <Outlet />
        </DashboardLayout>
      </AppProvider>
    </ThemeProvider>
  );
}
