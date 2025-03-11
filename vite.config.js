import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      react(),
      viteCompression()
    ],
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.gif','**/*.avif'],
    base: './'
  }
})
