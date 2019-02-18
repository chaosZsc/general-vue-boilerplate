module.exports = {
  pages: {
    index: {
      entry: 'src/main',
      template: 'public/index.html',
      filename: 'index.html',
      title: '模板',
    },
  },

  lintOnSave: process.env.NODE_ENV !== 'production',

  devServer: {
    overlay: {
      warning: true,
      errors: true,
    },
  },

  productionSourceMap: false,

  css: {
    sourceMap: process.env.NODE_ENV !== 'produciton',

    loaderOptions: {
      sass: {
        data: '@import "@/shared/utils/sass/index.scss";',
      },
    },
  },

  chainWebpack: (config) => {
    config
      .plugin('define')
      .tap(args => [{
        ...args[0],
        'process.env.DEPLOY_ENV': JSON.stringify(process.env.DEPLOY_ENV || 'staging'),
      }]);
  },
};
