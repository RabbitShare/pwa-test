import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        reactRefresh(),
        VitePWA({
            mode: 'development',
            srcDir: 'src',
            filename: 'sw.js',
            base: '/',
            strategies: 'injectManifest',
            includeAssets: ['/favicon.svg'], // <== don't remove slash, for testing purposes
            manifest: {
                display: 'standalone',
                name: 'PWA test',
                short_name: 'test',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: '/logo192.png', // <== don't remove slash, for testing purposes
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/logo512.png', // <== don't remove slash, for testing purposes
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: '/logo512.png', // <== don't remove slash, for testing purposes
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),
    ],
})
