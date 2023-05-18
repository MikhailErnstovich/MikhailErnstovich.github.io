import path from 'path';
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';

import Components from 'unplugin-vue-components/vite'

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
    Components(),
    VueI18nPlugin({ 
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/assets/locales/**'),
     }),
  ],
})
