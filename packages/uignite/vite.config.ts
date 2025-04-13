// import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';

// function getComponentEntries(dir: string) {
//   const files = fs.readdirSync(dir);
//   const entries: Record<string, string> = {};

//   files.forEach((file) => {
//     const fullPath = path.resolve(dir, file);
//     const stat = fs.statSync(fullPath);

//     if (
//       stat.isFile() &&
//       /\.(ts|tsx)$/.test(file) &&
//       !file.startsWith('index')
//     ) {
//       const name = path.parse(file).name;
//       entries[`components/${name}`] = fullPath;
//     }
//   });

//   return entries;
// }

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      entryRoot: 'src',
      include: ['src'],
      insertTypesEntry: true,
      rollupTypes: true,
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: {
        index: './src/index.ts',
        hooks: './src/hooks/index.ts',
        
      },
      fileName: (format, entryName) => `${entryName}.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        // Preserve module structure
        preserveModules: true,
        preserveModulesRoot: 'src',
        dir: 'dist',
      },
    },
  },
});
