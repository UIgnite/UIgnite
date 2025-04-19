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
      '8655-2409-4090-b004-9803-ba50-cc03-db31-a483.ngrok-free.app',
    ],
  },
});
