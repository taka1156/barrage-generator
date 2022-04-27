import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { router } from './router';
import { Navigation } from './components/Navigation';
import './index.css'

createRoot(document.getElementById('root')!).render(
<React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navigation />
      <Routes>
        {router.map((page, i) => (<Route key={`route_${i}`} {...page} />))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
