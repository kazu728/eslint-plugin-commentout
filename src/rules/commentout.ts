import {
  AST_TOKEN_TYPES,
  TSESLint,
  TSESTree,
} from '@typescript-eslint/experimental-utils'

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
      commentout: 'Remove inline comment except annotation.',
    },
    schema: [],
    fixable: 'code',
  },

  create: (
    context: Readonly<TSESLint.RuleContext<'commentout', []>>,
  ): TSESLint.RuleListener => {
    const report = (node: TSESTree.Comment): void =>
      context.report({
        node,
        messageId: 'commentout',
      })

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
  const hasAnnotationComment = new RegExp(
    '(TODO|FIXME|HACK|XXX|NOTE|WARNING).*|@.*',
  ).test(node.value)

  return node.type === AST_TOKEN_TYPES.Line && !hasAnnotationComment
}
