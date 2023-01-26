import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3014
  },
  plugins: [
    react(),
    eslint()
  ],
  define: {
    "process.env": process.env,
    // "process.env.PUBLIC_URL": process.env.npm_config_local_prefix,
  }
})