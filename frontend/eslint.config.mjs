import js from '@eslint/js';
import nextPlugin from 'eslint-plugin-next';
import reactHooks from 'eslint-plugin-react-hooks';
import reactPlugin from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      globals: {
        React: 'writable',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      react: reactPlugin,
      next: nextPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
    },
    settings: {
      next: {
        rootDir: '.',
      },
      react: {
        version: '18.3',
      },
    },
  },
  {
    ignores: ['.next/', 'node_modules/', 'out/'],
  },
];