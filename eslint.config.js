import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  // Base configuration for JavaScript and TypeScript
  {
    ignores: ['dist'],
    files: ['**/*.{js,jsx,ts,tsx}'], // Lint JavaScript and TypeScript files
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: globals.browser,
    },
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
      'react-refresh': reactRefresh,
    },
    rules: {
      // React-specific rules
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off', // Disable explicit return types if you don't want to enforce them
      'prettier/prettier': 'warn', // Warn about Prettier issues
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off', // Disable for modern React
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },
];
