module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  css: {
    sourceMap: true,
  },
  pages: {
    index: {
      entry: 'src/options/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'MoeGarden PT Helper',
    },
  },
  configureWebpack: config => {
    if(process.env.NODE_ENV === 'production') {
      config.devtool = 'nosources-source-map';
    } else {
      config.devtool = 'eval-source-map';
    }
  },
};
