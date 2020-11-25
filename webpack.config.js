
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'phaser3-start',
    // Load a custom template (lodash by default)
    template: './index.html'
  })],
  module: {rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-0'],
        }
      }
    },
  ] }
};