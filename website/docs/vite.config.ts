import path from 'path';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@pkgs': path.resolve(__dirname, '../../packages'),
    },
  },
  server: {
    allowedHosts: [
      'bfc3-2401-4900-8899-b2e1-e823-9f9-734c-d8d2.ngrok-free.app',
    ],
  },
});
