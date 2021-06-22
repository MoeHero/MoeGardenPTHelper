const merge = require('webpack-merge');
const common = require('./common.config');
const path = require('path');

module.exports = merge(common, {
  entry: {
    background: path.join(__dirname, '../src/background/index.ts'),
  },
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js',
  },
  devtool: 'eval-source-map',
  mode: 'development',
});
