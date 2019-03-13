# `eslint` 配置文件
```javascript
// 让数字有意义
const MAX_LINE_LEN = 200;

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',  // 使用airbnb的规范
  ],
  rules: {
    // 开发环境下打开，便于调试
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'no-extra-semi': 'error',  // 禁止不必要的分号
    'no-unreachable': 'error',  // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    eqeqeq: 'error',  // 使用 === 和 !==
    'no-empty-function': 'error', // 禁止出现空函数
    'no-magic-numbers': ['error', { ignore: [-1, 0, 1] }], // 禁用魔术数字，除了 [-1, 0, 1]
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state', 'vm'] }],  // 禁止对 function 的参数进行重新赋值，除了 [state, vm]
    'no-shadow': ['error', { allow: ['state', 'error'] }],  // 禁止变量声明与外层作用域的变量同名，除了 [state, error]
    'no-unused-vars': 'error',  // 禁止出现未使用过的变量
    'max-len': ['error', MAX_LINE_LEN],  // 设置一行代码的最大长度
    'newline-per-chained-call': 'error',  // 要求方法链中每个调用都有一个换行符
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],  // 代码之间最多出现一行空行
    'no-const-assign': 'error',  // 禁止修改 const 声明的变量
    'no-duplicate-imports': 'error',  // 禁止重复模块导入
    'prefer-const': 'error',  // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-destructuring': ['error', { array: false, object: true }],  // 要求对象使用解构
    'import/prefer-default-export': 'off',  // 防止文件单个输出模块时报错
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};

```
>更多配置请看[http://eslint.cn/](http://eslint.cn/)

[返回](../README.md)
