import { RouterProvider } from 'react-router-dom';
import router from './routes';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { NotificationsProvider } from '@toolpad/core/useNotifications';
import { DialogsProvider } from '@toolpad/core/useDialogs';
const queryClient = new QueryClient()
const App = () => {
  return <NotificationsProvider>
    <DialogsProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </DialogsProvider>
  </NotificationsProvider>
    ;
};

export default App;
