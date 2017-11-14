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
        if (node.callee.name === 'require' && node.arguments) {
          const requireArg = node.arguments[0].value

          if (requireArg && (requireArg === 'require-self-ref' || requireArg[0] === '~')) {
            context.report({
              node,
              message: 'Unexpected usage of "require-self-ref".'
            })
          }
        }
      }
    }
  }
}
