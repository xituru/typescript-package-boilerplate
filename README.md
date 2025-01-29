# typescript-package-boilerplate

[![npm package](https://img.shields.io/badge/npm%20i-@xituru/typescript--package--boilerplate-brightgreen)](https://www.npmjs.com/package/@xituru/typescript-package-boilerplate)
[![version number](https://img.shields.io/npm/v/@xituru/typescript-package-boilerplate?color=green&label=version)](https://github.com/xituru/typescript-package-boilerplate/releases)
[![Release & Publish](https://github.com/xituru/typescript-package-boilerplate/actions/workflows/release.yml/badge.svg)](https://github.com/xituru/typescript-package-boilerplate/actions/workflows/release.yml)
[![License](https://img.shields.io/github/license/xituru/typescript-package-boilerplate)](https://github.com/xituru/typescript-package-boilerplate/blob/main/LICENSE)

- [x] CI Publishing & Release
- [x] Multiple Formats (CJS, ESM & UMD)
- [x] Unit test with Jest
- [x] Code linter with TSLint
- [x] Commit linter with CommitLint & Husky

## Installation

```bash
$ npm install
```

## Build

```bash
# build multiple formats cjs, esm, and umd
$ npm run build

# build cjs format
$ npm run build:cjs

# build esm format
$ npm run build:esm

# build esm format
$ npm run build:umd
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run coverage
```

See `scripts` in `package.json` for other predefined script commands.

## Publishing & Release

This template is configured to use GitHub Actions CI/CD and [semantic-release](https://github.com/semantic-release/semantic-release) to automate Publishing to npm & Github Packages registry and Github Release.

- Every time a pull request is submitted on master or main branch, it will automatically tested against multiple OS and Node.js versions with GitHub Actions.
- Every time a push is submitted on master or main branch, it will automatically determine the type of release using [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer) also publish it to the registry, and this package is using default configuration, to modify the configuration just go there for more information.

### CI Publishing

This template is using extra plugin [@amanda-mitchell/semantic-release-npm-multiple](https://github.com/amanda-mitchell/semantic-release-npm-multiple) for publishing to registry, to modify the configuration just go there for more information.

### CI Release

This template is using extra plugin [@semantic-release/github](https://github.com/semantic-release/github) for releasing to Github Release, to modify the configuration just go there for more information.

## Support

For feedbacks or issues, check out the [Issues](https://github.com/xituru/typescript-package-boilerplate/issues).
