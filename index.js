const esRules = {
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
  'no-console': 2,
  quotes: ['error', 'single'],
  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    },
  ],
  semi: ['error', 'always'],
  indent: [
    'error',
    2,
    {
      SwitchCase: 1,
    },
  ],
  'no-sequences': 'error',
  eqeqeq: ['error', 'always'],
  yoda: [
    'error',
    'never',
    {
      exceptRange: true,
    },
  ],
  'space-in-parens': ['error', 'never'],
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'always',
      asyncArrow: 'always',
    },
  ],
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: false,
    },
  ],
  'key-spacing': [
    'error',
    {
      afterColon: true,
      mode: 'strict',
    },
  ],
  'comma-style': ['error', 'last'],
  'padded-blocks': ['error', 'never'],
  'no-multiple-empty-lines': 'error',
  'no-multi-assign': 'error',
  'no-lonely-if': 'error',
  'eol-last': ['error', 'always'],
  'brace-style': 'error',
  'semi-style': ['error', 'last'],
  'no-plusplus': [
    'error',
    {
      allowForLoopAfterthoughts: true,
    },
  ],
  'no-tabs': 2,
  'no-with': 'error',
  'padding-line-between-statements': [
    'error',
    {
      blankLine: 'always',
      prev: ['const', 'let', 'var'],
      next: '*',
    },
    {
      blankLine: 'any',
      prev: ['const', 'let', 'var'],
      next: ['const', 'let', 'var'],
    },
  ],
  'no-duplicate-imports': 'error',
  'jsx-quotes': ['error', 'prefer-double'],
  'react/jsx-uses-react': 2,
  'react/jsx-uses-vars': 2,
  'react/react-in-jsx-scope': 2,
  'react/prop-types': 0,
  'import/export': 0,
  'import/named': 0,
  'react/jsx-no-bind': 'error',
};

module.exports = {
  parser: 'babel-eslint',
  extends: ['standard', 'plugin:react/recommended'],
  plugins: ['react', 'import', 'react-hooks'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  globals: {
    __DEV__: true,
  },
  rules: esRules,

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'standard',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        ...esRules,
        'no-unused-vars': 'off',
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/camelcase': 0,
        '@typescript-eslint/no-unused-vars': 2,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-inferrable-types': [
          'error',
          {
            ignoreParameters: true,
            ignoreProperties: true,
          },
        ],
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/unbound-method': [
          'error',
          {
            ignoreStatic: true,
          },
        ],
      },
    },
  ],
};
