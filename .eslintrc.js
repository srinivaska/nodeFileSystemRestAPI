module.exports = {
    env: {
      node: true,
      mocha: true,
      es6: true
    },
    rules: {
        'indent': [2, 4],
        'linebreak-style': [2, 'unix'],
        'quotes': [2, 'single'],
        'brace-style': [2, '1tbs'],
        'array-bracket-spacing': [2, 'never'],
        'camelcase': [2, {'properties': 'never'}],
        'keyword-spacing': [2],
        'eol-last': [2],
        'no-trailing-spaces': [2],
        'comma-dangle': ["error", "never"],        
        'prefer-destructuring': ["error", {"object": false, "array": false}],
        'import/prefer-default-export': "off",        
        'no-unused-expressions': "off",
        'no-param-reassign': ["error", { "props": false}],
        'no-use-before-define': ["error", { "functions": false, "classes": true }],
        'consistent-return': "off",
        'import/no-dynamic-require':'off',
        'max-len':0
    }
  };