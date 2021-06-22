module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 3,
        allowFirstLine: false,
      },
    }],
    'vue/singleline-html-element-content-newline': ['error', {
      // ignores: ['pre', 'span', 'router-link'],
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      selfClosingTag: 'never',
    }],
    '@typescript-eslint/no-explicit-any': ['off'],
  },
};
