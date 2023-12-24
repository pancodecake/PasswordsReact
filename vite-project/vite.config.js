import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginRequire from "vite-plugin-require";
import path from 'path'
//npm path
import { readdirSync } from 'fs'
//  import svgr from "vite-plugin-svgr";
 import svgr from '@svgr/rollup';
// https://vitejs.dev/config/

//if a oroblem with sgr just change which one you installed
export default defineConfig({
  plugins: [react(),vitePluginRequire.default(),svgr()],
  css: {
    devSourcemap:true,//will help with sass
  },
  server: {
    port:5000,
    watch: {
      ignored: ['!**/node_modules/your-package-name/**'],
      //use this when problems with reload
      usePolling: true,
    },
  },
  resolve:{
    alias: {
      '@assets': path.resolve(__dirname,'src/assets'),
      '@components': path.resolve(__dirname,'src/components'),
      '@layouts': path.resolve(__dirname,'src/layouts'),
      '@hooks': path.resolve(__dirname,'src/hooks'),
    },
  }


})
