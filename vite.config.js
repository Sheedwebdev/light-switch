import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // accept connections from your network
    allowedHosts: ['.ngrok-free.app'] // ✅ string with leading dot = allow all subdomains
  }
});
