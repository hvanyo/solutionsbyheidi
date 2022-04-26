module.exports = {
  "extends": [
    "airbnb-typescript",
    "plugin:jest/recommended",
    "plugin:import/typescript"
  ],
  "plugins": [
    "@typescript-eslint",
    "jest"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "useJSXTextNode": true,
    "project": "./tsconfig.json",
    "tsconfigRootDir": "./"
  },
  "rules": {
    "arrow-parens": "off",
    "max-classes-per-file": "off",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "react/jsx-props-no-spreading": 0,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
  },
  "env": {
    "browser": true,
    "node": true
  },
};
