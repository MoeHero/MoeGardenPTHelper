const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

// 用于替换 @ 符号的路径
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js',
  },
  devtool: 'eval-source-map',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': resolve('src'),
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, '../manifest.json'),
          to: path.join(__dirname, '../dist'),
        },
      ],
    }),
  ],
};