# eslint-plugin-no-require-self-ref

[![codecov](https://codecov.io/gh/austinkelleher/eslint-plugin-no-require-self-ref/branch/master/graph/badge.svg)](https://codecov.io/gh/austinkelleher/eslint-plugin-no-require-self-ref)
[![Build Status](https://travis-ci.org/austinkelleher/eslint-plugin-no-require-self-ref.svg?branch=master)](https://travis-ci.org/austinkelleher/eslint-plugin-no-require-self-ref) [![NPM](https://img.shields.io/npm/v/eslint-plugin-no-require-self-ref.svg)](https://www.npmjs.com/package/eslint-plugin-no-require-self-ref)

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
  "plugins": [
    "no-require-self-ref"
  ],
  "rules": {
    "no-require-self-ref/no-require-self-ref": "error"
  }
}
```

If you want to use `require-self-ref` in your tests, simply disable this rule
in your test folder:

```json
{
  "plugins": [
    "no-require-self-ref"
  ],
  "rules": {
    "no-require-self-ref/no-require-self-ref": "off"
  }
}
```
