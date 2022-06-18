import {
  AST_TOKEN_TYPES,
  TSESLint,
  TSESTree,
} from '@typescript-eslint/experimental-utils'

const MESSAGE_ID = 'commentout'
type MESSAGE_ID = typeof MESSAGE_ID

export const commentout: TSESLint.RuleModule<MESSAGE_ID, []> = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Check existing commentout.',
      recommended: 'error',
      url: '',
    },
    messages: {
      commentout: 'Remove inline comment except annotation.',
    },
    schema: [],
    fixable: 'code',
  },

  create: (
    context: Readonly<TSESLint.RuleContext<MESSAGE_ID, []>>,
  ): TSESLint.RuleListener => {
    const report = (node: TSESTree.Comment): void =>
      context.report({ node, messageId: MESSAGE_ID })

    return {
      Program: (): void => {
        context
          .getSourceCode()
          .getAllComments()
          .filter(isInvalid)
          .forEach(report)
      },
    }
  },
}

const isInvalid = (node: TSESTree.Comment): boolean => {
  const pattern = '(TODO|FIXME|HACK|XXX|NOTE|WARNING).*|@.*'
  const hasAnnotationComment = new RegExp(pattern).test(node.value)

  return node.type === AST_TOKEN_TYPES.Line && !hasAnnotationComment
}
