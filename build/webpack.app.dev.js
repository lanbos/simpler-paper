const path = require('path')
const webpackMerge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.app')

module.exports = webpackMerge(baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  
  output: {
    path: path.resolve(__dirname, '../template/target'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
})