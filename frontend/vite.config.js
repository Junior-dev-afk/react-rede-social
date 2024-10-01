import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias para a pasta src
      '@icons': path.resolve(__dirname, 'public/icons'), // Alias para a pasta assets
    },
  },
})
