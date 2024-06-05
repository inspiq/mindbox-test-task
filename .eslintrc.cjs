// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: { browser: true, es2020: true },
  plugins: [
    'react-refresh',
    '@typescript-eslint',
    'import',
    'prettier',
    'simple-import-sort',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'react/jsx-no-literals': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'case',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'default',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'block-like',
      },
    ],
    'prefer-const': ['error'],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [['^\\u0000'], ['^react', '^[^.]'], ['^src/'], ['^\\.']],
      },
    ],
    'max-lines': ['error', 500],
    'no-console': 'warn',
    'object-shorthand': 'error',
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',
    'newline-before-return': 'warn',
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        trailingComma: 'all',
        arrowParens: 'always',
        singleQuote: true,
        printWidth: 80,
        bracketSpacing: true,
      },
    ],
    'import/newline-after-import': 'error',
    'react/react-in-jsx-scope': 'off',
  },
};
