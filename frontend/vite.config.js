import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',  // This tells Vite to treat all `.js` files as JSX
  },
  server: {
    proxy: {
      '/kit.fontawesome.com': 'https://kit.fontawesome.com',  // Proxy for Font Awesome
    },
  },
})
