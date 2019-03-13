# general-vue-boilerplate

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
___

# 简介
使用 `vue/cli@3` 脚手架搭建，但是替换了包管理器（`npm => yarn`）。
## 主要修改点
* [修改 `.eslintrc.js`](./intro/ESLINTRC.md)
* [添加 `vue.config.js`](./intro/VUECONFIG.md)
* [修改 `public` 文件夹中的文件](./intro/PUBLIC.md)
* 修改 `src` 文件夹下的目录结构
  * `assets` —— 静态文件存放目录
  * `components` —— 组件存放目录
  * `router` —— 路由配置文件存放目录
  * `service` —— API交互目录
  * `shared` —— 公用模块存放目录
  * `store` —— 状态管理目录
  * `views` —— 路由展示页目录
