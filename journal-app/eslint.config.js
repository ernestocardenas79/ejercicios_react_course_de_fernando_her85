import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';

export default [
    { ignores: ['dist'] },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        plugins: {
            'react/recommended': recommended,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
        },
    },
];

// module.exports = {
//     root: true,
//     env: { browser: true, es2020: true },
//     extends: [
//         'eslint:recommended',
//         'plugin:react/recommended',
//         'plugin:react/jsx-runtime',
//         'plugin:react-hooks/recommended',
//         'plugin:prettier/recommended',
//     ],
//     ignorePatterns: ['dist', '.eslintrc.cjs'],
//     parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
//     settings: { react: { version: 'detected' } },
//     plugins: ['react-refresh'],
//     rules: {
//         'react/jsx-no-target-blank': 'off',
//         'react-refresh/only-export-components': [
//             'warn',
//             { allowConstantExport: true },
//         ],
//     },
// };
