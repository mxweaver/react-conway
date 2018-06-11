import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

const environment = process.env.NODE_ENV || 'development'
const obfuscate = process.env.NODE_ENV === 'production'

export default {
  mode: environment === 'development' ? 'development' : 'production',
  entry: path.join(__dirname, 'app', 'main.js'),
  devtool: environment === 'production' ? false : 'cheap-module-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Game of Life',
      template: path.join(__dirname, 'app', 'index.html'),
      filename: path.join(__dirname, 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: obfuscate ? '[hash:base64]' : '[path][name]-[local]-[hash:base64:5]'
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }
      },
      {
        test: /\.wasm$/,
        loaders: ['wasm-loader']
      }
    ]
  }
}
