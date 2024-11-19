import AdminLayoutComponent from '@/pages/admin/components/layout';
import ListDepartment from '@/pages/admin/department';
import DoctorManagementPage from '@/pages/admin/doctor';
import HomePage from '@/pages/home';
import GoogleCallback from '@/pages/home/auth/google-callback';
import HomeLayout from '@/pages/home/components/layout';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const routerObjects: RouteObject[] = [
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: 'auth/google-response',
                element: <GoogleCallback />,
            },
        ],
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
            {
                path: 'doctors',
                element: <DoctorManagementPage />,
            },
            // {
            //   path: 'doctor-schedules',
            //   element: <DoctorScheduleManagementPage />,
            // },{
            //   path: 'patients',
            //   element: <PatientManagementPage />,
            // }
            // ,{
            //   path: 'invoices',
            //   element: <InvoiceManagementPage />,
            // }
        ],
    },
];

const router = createBrowserRouter(routerObjects);

export default router;
