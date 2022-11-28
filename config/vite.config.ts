import eslint from '@nabla/vite-plugin-eslint'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '',
  root: 'src',
  publicDir: '../public',
  server: {
    port: 5000,
  },
  build: {
    outDir: '../build',
    emptyOutDir: true,
    target: ['es2020'],
  },
  plugins: [react(), eslint({ formatter: 'stylish' })],
})
