import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NotificationsProvider } from '@toolpad/core/useNotifications';
import { DialogsProvider } from '@toolpad/core/useDialogs';
import useUserStore from './stores/user-store';
import React from 'react';
import { getCurrentUser } from './services/api';
import dayjs from 'dayjs';
import useSignalRStore from './stores/signalRStore';

const queryClient = new QueryClient();
const App = () => {
    const { token, logout, setProfile } = useUserStore();
    const signalRStore = useSignalRStore();

    React.useEffect(() => {
        if (!token?.accessToken) return logout();
        const expired = dayjs(token?.accessTokenExpirationAt).isBefore(dayjs());
        console.log(expired);
        if (expired) return logout();
        getCurrentUser({
            headers: {
                Authorization: `Bearer ${token?.accessToken}`,
            },
        })
            .then((data) => {
                setProfile(data.data);
                signalRStore.initSignalR(token?.accessToken);
            })
            .catch((err) => {
                console.log(err);
                logout();
            });
    }, [token?.accessToken]);

    return (
        <NotificationsProvider>
            <DialogsProvider>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </DialogsProvider>
        </NotificationsProvider>
    );
};

export default App;
