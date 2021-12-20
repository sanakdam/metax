const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const baseConfig = require('./webpack.base.config')

const prodConfiguration = () => merge([
  {
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxAsyncRequests: 20,
        maxInitialRequests: Infinity,
        minSize: 102400,
        cacheGroups: {
          reactVendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'reactVendor',
            priority: -10,
            reuseExistingChunk: true,
          },
          loadableVendor: {
            test: /[\\/]node_modules[\\/](@loadable|prop-types)[\\/]/,
            name: 'loadableVendor',
            priority: -20,
            reuseExistingChunk: true,
          },
          reduxVendor: {
            test: /[\\/]node_modules[\\/](react-redux|redux|redux-thunk|redux)[\\/]/,
            name: 'reduxVendor',
            priority: -30,
            reuseExistingChunk: true,
          },
          utilityVendor: {
            test: /[\\/]node_modules[\\/](styled-components)[\\/]/,
            name: 'utilityVendor',
            priority: -40,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/](!react|!react-dom|!styled-components|!react-redux|!redux|!redux-thunk|!redux|!prop-types)[\\/]/,
            name: 'vendor',
            priority: -50,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -60,
            reuseExistingChunk: true,
          },
        },
      },
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new OptimizeCssAssetsPlugin(),
    ],
  },
])

module.exports = env => merge(baseConfig(env), prodConfiguration())
