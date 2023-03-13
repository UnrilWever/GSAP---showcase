import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        scrollTrigger: resolve(__dirname, 'src/scrollTrigger/index.html')
      }
    }
  }
})
