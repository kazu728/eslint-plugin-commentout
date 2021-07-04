# eslint-plugin-commentout

Eslint plugin that check existing comemntout.

[![npm version](https://badge.fury.io/js/%40kzmat%2Feslint-plugin-commentout.svg)](https://badge.fury.io/js/%40kzmat%2Feslint-plugin-commentout.svg)
[![test](https://github.com/kzmat/eslint-plugin-commentout/actions/workflows/test.yaml/badge.svg)](https://github.com/kzmat/eslint-plugin-commentout/actions/workflows/test.yaml)
[![codecov](https://codecov.io/gh/kzmat/eslint-plugin-commentout/branch/master/graph/badge.svg?token=FVZHVNM64S)](https://codecov.io/gh/kzmat/eslint-plugin-commentout)

## Install

```
@kzmat/eslint-plugin-commentout
```

## Usage

`.eslintrc.js`

```js
module.exports = {
  "plugins": [
    ...,
    "@kzmat"
  ],
  "rules": [
    ...,
    "@kzmat/commentout": "error",
  ]
  ...,
}
```

## Example

```ts
🙆‍♂️ Good
const foo = 'bar'

🙅‍♂️ Bad
// const foo = 'bar'
```

## License

MIT
