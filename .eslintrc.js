module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
  ],
  plugins: [
    'jest',
    '@typescript-eslint',
  ],
  env: {
    node: true,
    es6: true,
    'jest/globals': true,
  },
  rules: {
    'import/extensions': 0,
    'import/no-unresolved': 0,
  },
};
