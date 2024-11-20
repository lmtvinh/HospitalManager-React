import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { initAxios } from './utils/axio-utils.ts';
initAxios();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App  />
  </StrictMode>,
)
