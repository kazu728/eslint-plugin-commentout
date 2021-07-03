module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:security/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier', 'security', 'local-rules'],
  rules: {
    '@typescript-eslint/no-explicit-any': 0,
    'prettier/prettier': 'error',
    'local-rules/commentout': 'error',
  },
  settings: {
    'import/extensions': ['.ts', '.js'],
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js'],
      },
    },
  },
}
