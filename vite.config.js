import { defineConfig  } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    hmr: {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer <seu-token-de-autorizacao-aqui>',
      }
    },
    proxy: {
      '/api': {
        target: 'https://api.cloudflare.com/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      cors:'false'
    },
    watch: {
      usePolling: true 
    }
  }
})
