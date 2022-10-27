import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/justcode-6th-rolling-paper/',
  plugins: [react()],
});
