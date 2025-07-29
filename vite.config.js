// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Job-Application-portal/', // ✅ EXACTLY this if your repo name is Job-Application-portal
});
