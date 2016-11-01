module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "globals": {
  },
  "rules": {
    "no-tabs": 0,
    "linebreak-style": 0,
    "no-console": 0,
    "indent": [1, "tab"],
  },
  "plugins": [
    "react", "import", "jsx-a11y", "json"
  ]
}
