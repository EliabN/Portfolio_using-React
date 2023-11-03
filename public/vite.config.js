// Import defineConfig function from Vite
import { defineConfig } from 'vite'
// Import Vite React plugin
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  // Using the Vite React plugin to enable React features in application
  plugins: [react()],
  server: {
    // Configuring the development server port on port 3000
    port: 3000,
    // When server starts open new default browser
    open: true
  }
})
