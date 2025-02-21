import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/v1/',
  server: {
    allowedHosts: [
      '5173-tarunvelagala-v1-3vwngx2q6rw.ws-us117.gitpod.io'
    ]
  }
})
