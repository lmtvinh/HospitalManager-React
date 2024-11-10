import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { getBookAPIMock } from '@/services/api/index.msw';
import { setupWorker } from 'msw/browser';

const server = setupWorker();

server.use(...getBookAPIMock());
server.start();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App  />
  </StrictMode>,
)
