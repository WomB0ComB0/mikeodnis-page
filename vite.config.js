import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/mikeodnis/',
  plugins: [
    react(),
    VitePWA({
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ["**/*"]
      },
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: [
        "**/*"
      ],
    }),
  ],
})
