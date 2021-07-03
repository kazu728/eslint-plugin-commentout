import { TSESLint } from '@typescript-eslint/experimental-utils'
import { commentout } from '../rules/commentout'

const tester = new TSESLint.RuleTester({
  parser: require.resolve('espree'),
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
})

tester.run('commentout', commentout, {
  valid: [{ code: "const foo = 'bar'" }],
  invalid: [
    {
      code: '// describe invalid code pattern',
      errors: [{ messageId: 'commentout' }],
    },
  ],
})
