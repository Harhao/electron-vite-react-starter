require('dotenv').config({ path: join(__dirname, '.env') })

import { defineConfig } from 'vite'
import { join } from 'path'

export default defineConfig({
  plugins: [],
  root: join(__dirname, 'src/renderer'),
  base: './', 
  server: {
    port: +process.env.PORT,
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src/renderer'),
      '@src': join(__dirname, 'src'),
      '@root': __dirname,
      '@assets': join(__dirname,'src/renderer/assets')
    },
  },
  optimizeDeps: {
    exclude: ['electron-store', 'electron'],
  },
  build: {
    outDir: join(__dirname, 'dist/renderer'),
    sourcemap: true,
    minify: false,
    rollupOptions: {
      external: ['electron'],
      plugins: [],
    },
  },
  esbuild: {
    jsxFragment: 'Fragment',
  },
})
