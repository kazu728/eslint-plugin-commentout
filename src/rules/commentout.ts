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
    return {
      Program: (node: TSESTree.Node): void => {
        context.getSourceCode().lines.forEach((line: string): void => {
          if (isValid(line)) return

          context.report({ node, messageId: 'commentout' })
        })
      },
    }
  },
}

const isValid = (line: string): boolean => {
  const hasCommentout = new RegExp('^// .*').test(line)
  if (!hasCommentout) return true

  const hasAnnotationComment = new RegExp(
    '^// (TODO|FIXME|HACK|XXX|NOTE|WARNING:)|@.*',
  ).test(line)

  return hasCommentout && hasAnnotationComment
}
