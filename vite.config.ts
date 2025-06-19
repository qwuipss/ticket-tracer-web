import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ticket-tracer-web/',
  server: {
    host: true,
    allowedHosts: [
      'qwujpss.space',
      'localhost', 
    ],
    proxy: {
      '/ticket-tracer-web': {
        target: 'http://localhost:5173',
        rewrite: (path) => path.replace(/^\/ticket-tracer-web/, '')
      }
    }
  },
})