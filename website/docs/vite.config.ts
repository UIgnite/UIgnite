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
      'a871-2409-40e4-1052-db0c-7468-1d4a-13a5-ed49.ngrok-free.app',
    ],
  },
});
