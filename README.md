# eslint-plugin-no-require-self-ref

[`require-self-ref`](https://github.com/patrick-steele-idem/require-self-ref)
should only be used in certain directories of projects. It is not recommended to
ship [npm](https://www.npmjs.com/) packages that are using `require-self-ref`.

## Installation

```bash
npm install eslint-plugin-no-require-self-ref --save-dev
```

## Usage

**my-proj/.eslintrc**

```json
{
  "rules": {
    "no-require-self-ref": "error"
  }
}
```

If you want to use `require-self-ref` in your tests, simply disable this rule
in your test folder:

```json
{
  "rules": {
    "no-require-self-ref": "off"
  }
}
```
