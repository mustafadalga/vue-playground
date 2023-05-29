import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import removeAttr from 'remove-attr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),   removeAttr({
    extensions: [ 'vue' ],
    attributes: [ 'data-testid' ]
})],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
