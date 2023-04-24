import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
interface IAssetFileNames {
  [key: string]: any;
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo: IAssetFileNames) => {
          const extType: string = assetInfo.name.split(".")[1];
          return `assets/${extType}/[name][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js"
      }
    }
  },

})
