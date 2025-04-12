import fs from 'fs'
import path from 'path';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';


function getComponentEntries(dir: string) {
  const files = fs.readdirSync(dir);
  const entries: Record<string, string> = {};

  files.forEach(file => {
    const fullPath = path.resolve(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isFile() && /\.(ts|tsx)$/.test(file) && !file.startsWith('index')) {
      const name = path.parse(file).name;
      entries[`components/${name}`] = fullPath;
    }
  });

  return entries;
}


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: getComponentEntries(path.resolve(__dirname, 'src/components')),
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        // Preserve module structure
        preserveModules: true,
        preserveModulesRoot: 'src',
        dir: 'dist',
      }
    }
  }
});
