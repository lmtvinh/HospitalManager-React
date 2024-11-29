import AppointmentManagementPage from '@/pages/admin/appointment';
import AdminLayoutComponent from '@/pages/admin/components/layout';
import Dashboard from '@/pages/admin/dashboard';
import ListDepartment from '@/pages/admin/department';
import DiagnosesManagementPage from '@/pages/admin/diagnosis';
import DoctorManagementPage from '@/pages/admin/doctor';
// import DoctorScheduleManagementPage from '@/pages/admin/doctor-schedule';
import PatientManagementPage from '@/pages/admin/patient';
import HomePage from '@/pages/home';
import GoogleCallback from '@/pages/home/auth/google-callback';
import HomeLayout from '@/pages/home/components/layout';
import PatientDetail from '@/pages/home/components/patientdetail';
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
            {
                path: 'patient-detail/:id',
                element: <PatientDetail />,
            }

        ],
    },
    {
        path: '/admin',
        element: <AdminLayoutComponent />,
        children: [
            {
                path: '',
                element: <Dashboard />,
            },
            {
                path: 'departments',
                element: <ListDepartment />,
            },
            {
                path: 'doctors',
                element: <DoctorManagementPage />,
            },
            {
                path: 'patients',
                element: <PatientManagementPage />,
            },
            {
                path: 'appointments',
                element: <AppointmentManagementPage />,
            },
            {
                path: 'diagnoses',
                element: <DiagnosesManagementPage />,
            },
        ],
    },
];

const router = createBrowserRouter(routerObjects);

export default router;
