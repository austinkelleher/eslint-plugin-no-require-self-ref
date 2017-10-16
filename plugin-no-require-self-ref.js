module.exports = {
  meta: {
    docs: {
      description: 'disabling the ability to require require-self-ref'
    },
    schema: []
  },

  create (context) {
    return {
      CallExpression (node) {
        if (node.callee.name === 'require' && node.arguments[0].value === 'require-self-ref') {
          context.report({
            node,
            message: 'Unexpected usage of "require-self-ref".'
          })
        }
      }
    }
  }
}
