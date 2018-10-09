# @devlaunch/ui-config

[![npm](https://img.shields.io/npm/v/@devlaunch/ui-config.svg?style=flat-square)](https://www.npmjs.com/package/@devlaunch/ui-config)
[![Travis branch](https://img.shields.io/travis/devlaunch/dev-starter/master.svg?style=flat-square)](https://travis-ci.org/devlaunch/dev-starter)
[![Codecov branch](https://img.shields.io/codecov/c/github/devlaunch/dev-starter/master.svg?style=flat-square)](https://codecov.io/gh/devlaunch/dev-starter)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://devlaunch.github.io/dev-starter)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The configuration for dev-starter

## Table of Contents

- [@devlaunch/ui-config](#@devlaunch/ui-config)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Related](#related)
  - [License](#license)

## Installation

```sh
$ npm i @devlaunch/ui-config -S
```

or

```sh
$ yarn add @devlaunch/ui-config
```

## Usage

This package just holds the configuration for the dev-starter. For now they are just holding the screen sizes.
In the future this package will hold also the configuration for colors, and borders.

```js
import { screenSize } from "@devlaunch/ui-config";

// 576px
screenSize.sm;
// 768px
screenSize.md;
// 992px
screenSize.lg;
// 1200px
screenSize.xl;
```

## Related

- [bootstrap](https://getbootstrap.com)
- [styled-components](https://styled-components.com)
- [styled-system](http://jxnblk.com/styled-system/)

## License

MIT © Devlaunch
