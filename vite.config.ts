import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portfoli-2026/',
  server: {
    open: true,
  },
});