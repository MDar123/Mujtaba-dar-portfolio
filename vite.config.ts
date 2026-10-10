import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // .env uses EMAILJS_* names (EmailJS ids/keys are public, client-side values)
  envPrefix: ['VITE_', 'EMAILJS_'],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
