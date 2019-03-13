# `public` 下文件修改一览
* ## `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <!-- 新增样式导入 -->
    <link rel="stylesheet" href="<%= BASE_URL %>reset.css" />
    <!-- 网页标题由vue配置文件生成 -->
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but general-vue-boilerplate doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->
  </body>
</html>

```
* ## `reset.css`
重置默认样式，为了保证各浏览器显示一致。

[返回](../README.md)
