# `vue.config` 配置文件
```javascript
module.exports = {
  // 项目的一些基本配置信息
  pages: {
    index: {
      entry: 'src/main',  // 入口
      template: 'public/index.html',  // 模板
      filename: 'index.html',  // 输出文件
      title: '模板',  // 标题
    },
  },

  lintOnSave: process.env.NODE_ENV !== 'production',

  devServer: {
    // 开发环境错误全屏提示
    overlay: {
      warning: true,
      errors: true,
    },
  },

  // 关闭生产环境下的 sourcemap
  productionSourceMap: false,

  css: {
    // 关闭生产环境下 csssourcemap
    sourceMap: process.env.NODE_ENV !== 'produciton',

    loaderOptions: {
      sass: {
        data: '@import "@/shared/utils/sass/index.scss";',  // 在所有文件中输入全局css变量
      },
    },
  },

  chainWebpack: (config) => {
    // 定义名为 DEPLOY_ENV 的进程变量
    config
      .plugin('define')
      .tap(args => [{
        ...args[0],
        'process.env.DEPLOY_ENV': JSON.stringify(process.env.DEPLOY_ENV || 'staging'),
      }]);
  },
};

```

>更多配置请看 [https://cli.vuejs.org/zh/](https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE)

[返回](../README.md)
