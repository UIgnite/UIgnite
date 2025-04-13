import {BrowserRouter} from 'react-router-dom';
import './index.css';
import {createRoot} from 'react-dom/client';
import Home from './pages/Home.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);
