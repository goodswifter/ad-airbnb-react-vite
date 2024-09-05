import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const resolve = pathname => path.resolve(__dirname, pathname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      utils: resolve('src/utils'),
      assets: resolve('src/assets'),
      hooks: resolve('src/hooks'),
      router: resolve('src/router'),
      services: resolve('src/services'),
      store: resolve('src/store'),
      views: resolve('src/views')
    }
  }
})
