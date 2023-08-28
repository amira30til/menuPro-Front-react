import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

const port = 3000;
const host = '127.0.0.1';

export default defineConfig({
  plugins: [react()],
  server: {
    port,
    host,
  },
  resolve: {
    alias: [
      { find: '@assets', replacement: resolve(__dirname, 'src/assets') },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
      { find: '@pages', replacement: resolve(__dirname, 'src/pages') },
    ],
  },
})
