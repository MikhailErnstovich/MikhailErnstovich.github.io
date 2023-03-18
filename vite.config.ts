import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: path.join(__dirname, "docs"),
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, './src')}/`
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/index.scss" as *;`
      },
    },
  },
  plugins: [
    vue(), 
    vueJsx(),
    // use unplugin-vue-components
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
          directives: true,
          version: "2.1.5",
        }),
      ],
    }),
  ],
})
