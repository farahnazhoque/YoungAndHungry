import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/pages/App';
import './index.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Newsletter from './pages/Newsletter';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
