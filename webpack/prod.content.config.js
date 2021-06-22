const merge = require('webpack-merge');
const common = require('./common.config');
const path = require('path');

module.exports = merge(common, {
  entry: {
    background: path.join(__dirname, '../src/content/index.ts'),
  },
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js',
  },
  devtool: 'nosources-source-map',
  mode: 'production',
});
