import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // server: {
  //   proxy: {
  //     '/admin': {
  //       target: 'http://localhost:8000',
  //       rewrite: path => path.replace(/^\/admin/, '')
  //     }
  //   }
  // }
})
