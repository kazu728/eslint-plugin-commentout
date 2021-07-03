import { commentout } from './rules/commentout'

export = {
  rules: {
    commentout,
  },
  configs: {
    all: {
      plugins: ['commentout'],
      rules: {
        commentout: 'error',
      },
    },
  },
}
