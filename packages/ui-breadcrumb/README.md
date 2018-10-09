# @devlaunch/ui-breadcrumb

[![npm](https://img.shields.io/npm/v/@devlaunch/ui-breadcrumb.svg?style=flat-square)](https://www.npmjs.com/package/@devlaunch/ui-breadcrumb)
[![Travis branch](https://img.shields.io/travis/devlaunch/dev-starter/master.svg?style=flat-square)](https://travis-ci.org/devlaunch/dev-starter)
[![Codecov branch](https://img.shields.io/codecov/c/github/devlaunch/dev-starter/master.svg?style=flat-square)](https://codecov.io/gh/devlaunch/dev-starter)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://devlaunch.github.io/dev-starter)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) breadcrumb component made with [styled-components](https://styled-components.com).

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
$ npm i @devlaunch/ui-breadcrumb -S
```

or

```sh
$ yarn add @devlaunch/ui-breadcrumb
```

## Usage

For detailed information take a look at the [documentation](https://devlaunch.github.io/dev-starter).

```jsx
/*
  if you installed `dev-starter` use

    import { ... } from 'dev-starter'

  instead.
*/
import {
  Breadcrumb,
  BreadcrumbItem,
} from '@devlaunch/ui-breadcrumb';

const MyBreadcrumbComponent = (props) => (
  {/* use different props to change the visual appearance */}
  <Breadcrumb>
    <BreadcrumbItem>
    <a href="#">Home</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
    <a href="#">Library</a>
    </BreadcrumbItem>
    <BreadcrumbItem active>
      Data
    </BreadcrumbItem>
  </Breadcrumb>
);
```

## Properties

Properties which can be added to the component to change the visual appearance. This component uses [styled-system](http://jxnblk.com/styled-system/).

* `active` only on BreadcrumbItem **Type**: boolean
* `m`  margin **Type**: string
* `mt` margin-top **Type**: string
* `mr` margin-right **Type**: string
* `mb` margin-bottom **Type**: string
* `ml` margin-left **Type**: string
* `mx` margin-left and margin-right **Type**: string
* `my` margin-top and margin-bottom **Type**: string
* `p`  padding **Type**: string
* `pt` padding-top **Type**: string
* `pr` padding-right **Type**: string
* `pb` padding-bottom **Type**: string
* `pl` padding-left **Type**: string
* `px` padding-left and padding-right **Type**: string
* `py` padding-top and padding-bottom **Type**: string
* `width` **Type**: string
* `fontSize` **Type**: string
* `fontWeight` **Type**: string
* `textAlign` **Type**: string
* `lineHeight` **Type**: string
* `display` **Type**: string
* `color` **Type**: string
* `borderRadius` **Type**: string
* `borderColor` **Type**: string
* `border` **Type**: string
* `borderTop` **Type**: string
* `borderRight` **Type**: string
* `borderBottom` **Type**: string
* `borderLeft` **Type**: string

## Related

* [bootstrap](https://getbootstrap.com)
* [styled-components](https://styled-components.com)
* [styled-system](http://jxnblk.com/styled-system/)

## License

MIT © Devlaunch
