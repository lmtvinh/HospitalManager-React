import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/main.css'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/swiper-bundle.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App  />
  </StrictMode>,
)
