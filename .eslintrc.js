const MAX_LINE_LEN = 200;

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-extra-semi': 'error',
    'no-unreachable': 'error',
    eqeqeq: 'error',
    'no-empty-function': 'error',
    'no-magic-numbers': ['error', { ignore: [-1, 0, 1] }],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state', 'vm'] }],
    'no-shadow': ['error', { allow: ['state', 'error'] }],
    'no-unused-vars': 'error',
    'max-len': ['error', MAX_LINE_LEN],
    'newline-per-chained-call': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'no-const-assign': 'error',
    'no-duplicate-imports': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { array: false, object: true }],
    'import/prefer-default-export': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
