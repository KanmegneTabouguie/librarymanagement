import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsx: 'react',
    loaders: {
      '.js': 'jsx', // Add this line to specify JSX loader for .js files
    },
  },
})
