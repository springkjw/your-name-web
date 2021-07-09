module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  parserOptions: {
    ecmaVersion: 11,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['js', 'jsx'] }],
    'arrow-parens': ['warn', 'as-needed'],
    'no-unused-vars': ['off'],
    'no-console': ['off'],
    'import/prefer-default-export': ['off'],
    'react-hooks/exhaustive-deps': ['warn'],
    'react/jsx-props-no-spreading': ['off'],
    'react/prop-types': ['off'],
    'no-underscore-dangle': ['off'],
    'react/no-array-index-key': ['off'],
    'consistent-return': ['off'],
    'linebreak-style': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
      },
      alias: {
        map: [
          ['@assets', './src/assets'],
          ['@components', './src/components'],
          ['@services', './src/services'],
          ['@store', './src/store'],
          ['@routers', './src/routers'],
          ['@utils', './src/utils'],
        ],
      },
    },
  },
};
