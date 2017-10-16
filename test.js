const RuleTester = require('eslint').RuleTester
const rule = require('./plugin-no-require-self-ref')

const ruleTester = new RuleTester()

ruleTester.run('no-require-self-ref', rule, {
  valid: [
    {
      code: 'require("marko")'
    },
    {
      code: 'require("./hello")'
    },
    {
      code: 'hello()'
    }
  ],

  invalid: [
    {
      code: 'require("require-self-ref")',
      errors: [ { message: 'Unexpected usage of "require-self-ref".' } ]
    },
    {
      code: 'require("~/hello")',
      errors: [ { message: 'Unexpected usage of "require-self-ref".' } ]
    }
  ]
})
