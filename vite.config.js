import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/faisaldev.github.io-MyPortofolio-/', // Tambahkan '/' di awal dan akhir
  publicDir: 'public', // Pastikan Vite menemukan index.html
  build: {
    outDir: 'dist', // Direktori output build
    emptyOutDir: true
  },
  server: {
    port: 3000, // Bisa diubah sesuai kebutuhan
    open: true, // Otomatis membuka di browser saat dijalankan
    strictPort: true, // Menghindari konflik port
  }
})
