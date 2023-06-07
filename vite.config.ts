import path from 'path';
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { VitePWA } from 'vite-plugin-pwa';

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
    VitePWA({ 
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,pdf,webp}'],
        cleanupOutdatedCaches: false
      },
      manifest: {
        name: 'Mikhail Makarov',
        short_name: 'M',
        description: 'Mikhail Makarov is a freelance frontend developer based in Zelenograd. Contact him here for frontend engineering help with Vue, Javascript, HTML, CSS & more.',
        theme_color: '#ffffff',
        display: "standalone",
        icons: [
          {
            src: '/assets/favicon/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/favicon/android-chrome-pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
