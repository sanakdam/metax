const path = require('path')
const { merge } = require('webpack-merge')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const APP_DIR = path.resolve(__dirname, '../src')

module.exports = ({ PLATFORM }) => merge([
  {
    entry: ['@babel/polyfill', APP_DIR],
    module: {
      rules: [
        {
          test: /\.(sc|c|sa)ss$/,
          use: [
            PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(png|jpg|svg|ttf)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 100000,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [{
          from: 'src/assets',
          to: 'assets',
        }],
      }),
    ],
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[name].[hash].js',
      publicPath: '/',
    },
  },
])
