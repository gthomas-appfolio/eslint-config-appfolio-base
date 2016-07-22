# Appfolio base ESLint config

This package provides Appfolio's base JavaScript for ES6/2015 as an extensible shared config.

This is based on [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base),
with a few adjustments to warnings to minimize noise, and to encourage useful comments.

**Note**: _Basic JSX support is enabled in this config, but a new configuration will be added next to enable
full React support._

## Usage

1. `npm install --save-dev eslint-config-appfolio-base`
2. add 
   `"extends": "appfolio-base"`
    to your .eslintrc.json
