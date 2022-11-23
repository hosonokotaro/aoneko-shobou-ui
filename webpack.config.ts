import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack, { Configuration as WebpackConfiguration } from 'webpack'
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

let pluginsConfig: Configuration['plugins'] = [
  new HTMLWebpackPlugin({ template: './src/index.html' }),
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: '**/*',
        context: 'public/',
        noErrorOnMissing: true,
      },
    ],
  }),
  new ForkTsCheckerWebpackPlugin({
    typescript: {
      diagnosticOptions: {
        semantic: true,
        syntactic: true,
      },
    },
    eslint: {
      files: './src/**/*.{ts,tsx,js,jsx}',
    },
  }),
]

if (process.env.WEBPACK_SERVE) {
  pluginsConfig = [
    ...pluginsConfig,
    new webpack.SourceMapDevToolPlugin({}),
    new webpack.HotModuleReplacementPlugin(),
  ]
}

const config: Configuration = {
  mode: 'development',
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/components/'),
    },
  },
  devServer: {
    port: 3000,
    hot: 'only',
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public/'),
      watch: {
        poll: 1000,
        ignored: ['node_modules'],
      },
    },
  },
  devtool: false,
  plugins: pluginsConfig,
}

export default config
