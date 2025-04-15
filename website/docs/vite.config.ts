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
    allowedHosts: ['a4c7-2409-40e4-5b-ec82-99f8-305d-2ff4-3f5.ngrok-free.app']
  }
});
