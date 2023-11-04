// Import defineConfig function from Vite
import { defineConfig } from 'vite'
// Import Vite React plugin
import react from '@vitejs/plugin-react';

// More info: https://vitejs.dev/config/
export default defineConfig({
  // Enable React support in the project using Vite React plugin
  plugins: [react()],
  server: {
    // Configuring the development on port 3000
    port: 3000,
    // Opens the default browser when the server starts
    open: true
  }
})
