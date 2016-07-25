module.exports = {
  'extends': 'airbnb-base',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  rules: {
    'arrow-body-style': [2, 'as-needed', { requireReturnForObjectLiteral: true }],
    'comma-dangle': 0,
    'import/no-unresolved': 1, // To minimize false errors with Webpack loaders
    'max-len': 1,
    'new-cap': 1,
    'no-console': 1,
    'prefer-const': [1, {
      destructuring: 'any',
      ignoreReadBeforeAssign: true
    }],
    'require-jsdoc': [1, { // Encourage writing comments
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true
      }
    }],
    'spaced-comment': 0
  }
}
