import {BrowserRouter} from 'react-router-dom';
import '@pkgs/uignite/dist/uignite.css';
import '../index.css';

import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {ThemeProvider, ToastProvider} from '@pkgs/uignite';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ToastProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ToastProvider>
  </BrowserRouter>
);
