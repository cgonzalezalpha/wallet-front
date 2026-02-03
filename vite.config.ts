import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // Importante: assets relativos para servir bajo /wallet-front/ (reverse proxy)
  // y también funcionar si accedes directo al contenedor.
  base: './',
  plugins: [vue()],
})
