module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    files: ['*.ts', '*.tsx'],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.node.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'eslint-plugin-import',
    'only-warn',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/jsx-runtime',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['./src'],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
  rules: {
    'arrow-spacing': ['error', { before: true, after: true }],
    'func-style': ['error', 'declaration'],
    'require-await': 'error',
    'prefer-destructuring': ['error', { object: true, array: false }],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    semi: ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],
    'max-len': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
  },
}
