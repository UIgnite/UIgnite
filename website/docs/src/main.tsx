import {BrowserRouter} from 'react-router-dom';
import '../index.css';
import '@pkgs/uignite/dist/uignite.css';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import {ThemeProvider} from '@pkgs/uignite';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
