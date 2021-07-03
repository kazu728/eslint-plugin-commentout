import { TSESLint, TSESTree } from '@typescript-eslint/experimental-utils'

export const commentout: TSESLint.RuleModule<'commentout', []> = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Possible Errors',
      description: 'Check existing commentout.',
      recommended: 'error',
      url: '',
    },
    messages: {
      commentout: 'Remove commentout.',
    },
    schema: [],
    fixable: 'code',
  },

  create: (
    context: Readonly<TSESLint.RuleContext<'commentout', []>>,
  ): TSESLint.RuleListener => {
    const existsComemntout = (line: string): boolean => {
      return new RegExp('^// .*').test(line)
    }

    return {
      Program: (node: TSESTree.Node): void => {
        context.getSourceCode().lines.forEach((line: string): void => {
          if (!existsComemntout(line)) return

          context.report({ node, messageId: 'commentout' })
        })
      },
    }
  },
}
