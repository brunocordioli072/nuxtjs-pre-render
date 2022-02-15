module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'import/prefer-default-export': 'off',
    'vue/multi-word-component-names': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
};
