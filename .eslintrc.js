// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    "func-names": 0,
    "space-before-function-paren": 0,
    "object-shorthand": 0,
    "no-param-reassign": 0,
    "arrow-parens": 0,
    "arrow-body-style": 0,
    "quotes": [0, 'double', { avoidEscape: true }],
    'no-console': 0,
    "semi": 0,
    "no-unused-labels": 0,
    "no-labels": 0,
    "no-restricted-syntax": 0,
    "no-unused-expressions": 0,
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
