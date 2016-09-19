module.exports = {
   "parser": "babel-eslint",
   "extends": "airbnb",
   "plugins": [
      "react"
   ],
   "rules": {
      "comma-dangle": [0],
      "max-len": [2, 120, 2, {ignoreUrls: true}],
      "no-param-reassign": [2, {"props": false}],
      "no-unused-vars": [2, { "vars": "all", "args": "none" }],
      "no-shadow": [2, { "allow": ["_", "err"] }],
      "no-else-return": [0],
      "arrow-body-style": [0],
      "guard-for-in": [0],
      "consistent-return": [0],
      "no-use-before-define": [0],
      "react/prefer-es6-class": [0],
      "prefer-rest-params": [0],

      /* The following ones should probably be re-enabled */
      "react/prop-types": [0],
      "react/jsx-closing-bracket-location": [0],
      "react/sort-comp": [0],
      "react/prefer-stateless-function": [0],
      "react/no-multi-comp": [0],
      "react/no-is-mounted": [0]
   }
};