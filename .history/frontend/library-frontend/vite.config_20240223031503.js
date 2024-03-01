import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import esbuild from 'vite:esbuild';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    esbuild({
      // Remove the "loaders" option from here
    }),
  ],
});