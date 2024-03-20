// import resolve from '@rollup/plugin-node-resolve'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      name: 'index',
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        '@googlemaps/js-api-loader',
        '@vanilla-extract/css',
        '@vanilla-extract/dynamic',
        '@vanilla-extract/vite-plugin',
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
          '@vanilla-extract/vite-plugin': 'vitePlugin',
          dayjs: 'dayjs',
          'lodash-es': 'lodashEs',
          react: 'React',
          'react-dom': 'ReactDOM',
          swiper: 'Swiper',
        },
      },
      plugins: [
        // peerDepsExternal(),
        // resolve(),
        // commonjs(),
        // terser(),
        // typescript({
        //   typescript: ttypescript,
        //   exclude: ['**/*.stories.tsx'],
        // }),
      ],
    },
  },
  plugins: [
    tsconfigPaths(),
    vanillaExtractPlugin(),
    dts({ rollupTypes: true }),
  ],
})
