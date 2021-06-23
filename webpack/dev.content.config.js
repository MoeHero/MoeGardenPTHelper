const merge = require('webpack-merge');
const common = require('./dev.common.config');
const path = require('path');

module.exports = merge(common, {
  entry: {
    background: path.join(__dirname, '../src/content/index.ts'),
  },
});
