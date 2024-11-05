import AdminLayoutComponent from '@/pages/admin/components/layout';
import HomePage from '@/pages/home';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

const routerObjects: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/admin',
    element: <AdminLayoutComponent />,
    children: [
      {
        path: '',
        element: <div>Dashboard</div>,
      },
    ],
  },
];

const router = createBrowserRouter(routerObjects);

export default router;
