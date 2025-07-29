import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Job-Application-portal/', // 👈 MUST match GitHub repo name exactly
  plugins: [react()],
});
