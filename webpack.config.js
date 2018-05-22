'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env['WEBPACK_PROFILE'] || 'development',
  entry: ['babel-polyfill', './src/main.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.png$/,
        use: {
          loader: 'file-loader',
          options: {
            name: process.env['WEBPACK_PROFILE'] === 'development' ? '[name].[ext]' : '[hash].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Lizard Quest'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  }
}
