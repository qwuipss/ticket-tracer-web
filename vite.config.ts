import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ticket-tracer-web/',
  server: {
    host: true,
    hmr: {
      protocol: 'wss',
      host: 'qwuipss.space'
    }
  },
  build: {
    assetsDir: 'assets',
    manifest: true
  }
})