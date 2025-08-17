import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:11434',
        changeOrigin: true,
        secure: false
      }
    }
  }
})

// # Stop ollama if running
// ollama stop

// # Start with CORS enabled
// OLLAMA_ORIGINS="http://localhost:3000,http://localhost:3001" ollama serve