# @devlaunch/ui-base

[![npm](https://img.shields.io/npm/v/@devlaunch/ui-base.svg?style=flat-square)](https://www.npmjs.com/package/@devlaunch/ui-base)
[![Travis branch](https://img.shields.io/travis/devlaunch/dev-starter/master.svg?style=flat-square)](https://travis-ci.org/devlaunch/dev-starter)
[![Codecov branch](https://img.shields.io/codecov/c/github/devlaunch/dev-starter/master.svg?style=flat-square)](https://codecov.io/gh/devlaunch/dev-starter)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://devlaunch.github.io/dev-starter)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) base components made with [styled-components](https://styled-components.com).

## Table of Contents

* [Documentation](https://devlaunch.github.io/dev-starter)
* [Why?](#why)
* [Installation](#installation)
* [Usage](#usage)
* [Properties](#properties)
* [Related](#related)
* [License](#license)

## Why?

This is a modular approach to use [bootstrap](https://getbootstrap.com) components for quick prototypes, as an entrypoint of your own component library, or if you need just one [bootstrap](https://getbootstrap.com) component for your application. To work with ease with any other libary or framework this component is built with [styled-components](https://styled-components.com).

## Installation

> Note: this component has a peer dependency on `styled-components` and `styled-system`. To use this component you also need to `npm i styled-components styled-system -S`.

```sh
$ npm i @devlaunch/ui-base -S
```

or

```sh
$ yarn add @devlaunch/ui-base
```

## Usage

> This are just pre-styled html elements to work with the bootstrap layout. They use the styles from bootstrap.

```jsx
/*
  if you installed `dev-starter` use

    import { ... } from 'dev-starter'

  instead.
*/
import {
  A,
  Abbr,
  Address,
  Article,
  Aside,
  B,
  Blockquote,
  Button,
  Caption,
  Code,
  Dd,
  Dfn,
  Dialog,
  Dl,
  Dt,
  Fieldset,
  Figcaption,
  Figure,
  Footer,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Header,
  Hgroup,
  Hr,
  Img,
  Input,
  Kbd,
  Label,
  Main,
  Nav,
  Ol,
  Optgroup,
  Output,
  P,
  Pre,
  Progress,
  Samp,
  Section,
  Select,
  Small,
  Strong,
  Sub,
  Summary,
  Sup,
  Svg,
  Table,
  Textarea,
  Th,
  Ul,
} from '@devlaunch/ui-base';

const MyComponent = (props) => (
  {/* use the base components */}
);
```

## Properties

This components do not have any specific props, they are just pre-styled html elements to work with the bootstrap layout. They use the styles from bootstrap.

## Related

* [bootstrap](https://getbootstrap.com)
* [styled-components](https://styled-components.com)
* [styled-system](http://jxnblk.com/styled-system/)

## License

MIT © Devlaunch
