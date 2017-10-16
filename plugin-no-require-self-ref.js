'use strict'

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
        var requireArg
        if (node.callee.name === 'require' &&
          (((requireArg = node.arguments[0].value) === 'require-self-ref') || requireArg[0] === '~')) {
          context.report({
            node,
            message: 'Unexpected usage of "require-self-ref".'
          })
        }
      }
    }
  }
}
