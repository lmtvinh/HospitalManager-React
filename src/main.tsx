import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { initAxios } from './utils/axio-utils.ts';
import vi from 'dayjs/locale/vi';
import localeData from 'dayjs/plugin/localeData';
import dayjs from 'dayjs';

dayjs.extend(localeData);
dayjs.locale(vi);
initAxios();
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
