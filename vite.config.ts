import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
    },
    sourcemap: true,
    rollupOptions: {
      external: [
        '@googlemaps/js-api-loader',
        '@vanilla-extract/css',
        '@vanilla-extract/dynamic',
        'dayjs',
        'lodash-es',
        'react',
        'react-dom',
        'swiper',
      ],
      output: {
        globals: {
          '@googlemaps/js-api-loader': 'jsApiLoader',
          '@vanilla-extract/css': 'css',
          '@vanilla-extract/dynamic': 'dynamic',
          dayjs: 'dayjs',
          'lodash-es': 'lodashEs',
          react: 'React',
          'react-dom': 'ReactDOM',
          swiper: 'Swiper',
        },
      },
      plugins: [],
    },
  },
  plugins: [tsconfigPaths(), react(), vanillaExtractPlugin()],
})
