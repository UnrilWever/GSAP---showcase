import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        filp: resolve(__dirname, '/src/filp/index.html')
      }
    }
  }
})
