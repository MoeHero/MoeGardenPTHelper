const merge = require('webpack-merge');
const common = require('./prod.common.config');
const path = require('path');

module.exports = merge(common, {
  entry: {
    background: path.join(__dirname, '../src/background/index.ts'),
  },
});
