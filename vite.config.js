import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // Pastikan sesuai dengan nama repository GitHub
  build: {
    outDir: 'dist', // Direktori output build
    emptyOutDir: true
  },
  server: {
    port: 3000, // Bisa diubah sesuai kebutuhan
    open: true // Otomatis membuka di browser saat dijalankan
  }
})
