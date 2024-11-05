import AdminLayoutComponent from '@/pages/admin/components/layout';
import ListDepartment from '@/pages/admin/department';
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
      {
        path: 'departments',
        element: <ListDepartment />,
      },
    ],
  },
];

const router = createBrowserRouter(routerObjects);

export default router;
