import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSourceLocator } from "@metagptx/vite-plugin-source-locator"

export default defineConfig({
  plugins: [
    viteSourceLocator({
      prefix: "mgx",
    }), 
    react()
  ],
  base: './', // PENTING: Agar asset paths benar di Electron
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  server: {
    port: 5173,
    strictPort: true,
    host: 'localhost'
  },
  optimizeDeps: {
    exclude: ['electron']
  }
})