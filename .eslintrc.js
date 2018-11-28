module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-useless-constructor': 0,
    'no-mixed-operators': 0,
    'max-len': 0,
    'class-methods-use-this': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'no-plusplus': 0,
    'import/no-named-as-default-member': 0,
    'no-unused-expressions': 0,
    'no-useless-escape': 0,
    'default-case': 0,
    'no-shadow': 0,
    'no-restricted-globals': 0,
    'padded-blocks': 0,
    'object-curly-newline': 0,
    'no-param-reassign': 0,
    'func-names': 0,
    'no-underscore-dangle': 0,
    'comma-dangle': 0,
    'linebreak-style': 0
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
};
