import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    vueJsx(),
    Components({
      dirs:['src/components'],
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue'],
      deep: true,
      // allow auto import and register components used in markdown
      resolvers: [
        ElementPlusResolver(),
      ],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/,],
    }),
  ],
  resolve: {
    alias: {
      '~/': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
