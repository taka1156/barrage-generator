import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({command}) => ({
  root: 'src',
  base: command === 'build' ? '/barrage-generator/' : './',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  resolve: {
    alias: {
        '@': resolve(__dirname, './src')
    }
  },
  plugins: [react()]
}));
