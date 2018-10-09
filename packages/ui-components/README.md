# @devlaunch/ui-components

[![npm](https://img.shields.io/npm/v/dev-starter.svg?style=flat-square)](https://www.npmjs.com/package/dev-starter)
[![Travis branch](https://img.shields.io/travis/devlaunch/dev-starter/master.svg?style=flat-square)](https://travis-ci.org/devlaunch/dev-starter)
[![Codecov branch](https://img.shields.io/codecov/c/github/devlaunch/dev-starter/master.svg?style=flat-square)](https://codecov.io/gh/devlaunch/dev-starter)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://devlaunch.github.io/dev-starter)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) components made with [styled-components](https://styled-components.com).

## Table of Contents

- [@devlaunch/ui-components](#devlaunchui-components)
  - [Table of Contents](#table-of-contents)
  - [Why?](#why)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Components](#components)
  - [Related](#related)
  - [License](#license)

## Why?

I wanted to use [bootstrap](https://getbootstrap.com) with [React](https://reactjs.org/) for **fast prototypes**, or as entrypoint for **my own UI Component Library**, or if I needed just one bootstrap component for my application, now I can simply install that specific component. To work with ease with any other libary or framework these components are built with [styled-components](https://styled-components.com).

I also wanted to learn a bit more on how CSS works and on how to build a CSS UI Library from scratch, mostly but not only by reading the [bootstrap CSS code](https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.css) and the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS). I also wanted to learn how to manage and maintain a monorepo with multiple packages based on [lerna](https://lernajs.io/).

## Installation

You can install all bootstrap components with...

> Note: every component has a peer dependency on `styled-components` and `styled-system`. To use this components you also need to `npm i styled-components styled-system -S`.

```sh
$ npm i @devlaunch/ui-components -S
```

or

```sh
$ yarn add @devlaunch/ui-components
```

or you can install just the components that you need by following the installation guides in the [components section](#components).

## Usage

For detailed information (also on how to customize this components) take a look at the [documentation](https://devlaunch.github.io/dev-starter).

Most of this components are using [styled-system](http://jxnblk.com/styled-system/).

To see which components are available take a look at the [components section](#components).

```jsx
// whatever components you need
import { Button } from "@devlaunch/ui-components";

export const myComponent = props => <Button>Hello, World!</Button>;
```

## Components

For detailed information take a look at the [documentation](https://devlaunch.github.io/dev-starter).

- [Alert Component](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-alert#readme)
- [Badge Component](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-badge#readme)
- [Base Components](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-base#readme)
- [Breadcrumb Component](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-breadcrumb#readme)
- [Button Component](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-button#readme)
- [Card Component](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-card#readme)
- [Container Component](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-container#readme)
- [Dropdown Component](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-dropdown#readme)
- [Form Component](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-form#readme)
- [Grid Component](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-grid-system#readme)
- [Jumbotron Component](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-jumbotron#readme)
- [Listgroup Component](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-listgroup#readme)
- [Modal Component](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-modal#readme)
- [Nav Component](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-nav#readme)
- [Navbar Component](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-navbar#readme)
- [Popover Component](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-popover#readme)
- [Table Component](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-table#readme)
- [Tooltip Component](https://github.com/devlaunch/dev-starter/tree/master/packages/@devlaunch/ui-tooltip#readme)

## Related

- [bootstrap](https://getbootstrap.com)
- [styled-components](https://styled-components.com)
- [styled-system](http://jxnblk.com/styled-system/)

## License

MIT © Devlaunch
