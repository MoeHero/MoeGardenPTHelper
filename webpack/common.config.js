const path = require('path');

// 用于替换 @ 符号的路径
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': resolve('src'),
    },
  },
};
