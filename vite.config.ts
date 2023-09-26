import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '#root': resolve(__dirname),
      '@main/*': resolve(__dirname, 'src/components/main'),
      '@admin/*': resolve(__dirname, 'src/components/admin'),
    },
  },
});
