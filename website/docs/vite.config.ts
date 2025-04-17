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
    allowedHosts: ['080a-104-28-199-189.ngrok-free.app'],
  },
});
