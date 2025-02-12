import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // Pastikan Vite bisa membaca public/
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: path.resolve(__dirname, 'public/index.html'), // Arahkan ke index.html
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
