module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
  },
  // https://github.com/airbnb/javascript
  extends: 'eslint:recommended',

  "rules": {
      //缩进设置为4个空格
      "indent": ["error", 4, { "SwitchCase": 1, }],
      "dot-notation":"off",
      "no-bitwise":"off",
      "max-len":"off",
      "global-require":"off",
      "space-before-function-paren":"off",
      "guard-for-in":"off",
      "no-restricted-syntax":"off",
      "no-plusplus":"off",
      "func-names":"off",
      "radix":"off",
      "no-prototype-builtins":"off",
      "no-continue":"off",
      "no-unused-vars":"off",
      "no-underscore-dangle":"off",
      "no-mixed-operators":"off",
      "quote-props":"off",
      "no-param-reassign": "off",
      "no-unsafe-negation": "off",
      "no-extra-boolean-cast": "off",
      "react/no-this-in-sfc":"off",
      "import/no-unresolved":"off",
      "no-proto":"off",

      // personal
      "no-use-before-define": "off",

  },
  "globals": {
      "cc": true,
      "window": true,
      "global": true,
      "document": true,
      "sp": true,
      "ditto": true,
      "TDGA": true,
      "localStorage": true,

      "FBInstant": true,
  },
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
  },
};
