# @devlaunch/ui-button

[![npm](https://img.shields.io/npm/v/@devlaunch/ui-button.svg?style=flat-square)](https://www.npmjs.com/package/@devlaunch/ui-button)
[![Travis branch](https://img.shields.io/travis/devlaunch/dev-starter/master.svg?style=flat-square)](https://travis-ci.org/devlaunch/dev-starter)
[![Codecov branch](https://img.shields.io/codecov/c/github/devlaunch/dev-starter/master.svg?style=flat-square)](https://codecov.io/gh/devlaunch/dev-starter)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://devlaunch.github.io/dev-starter)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) button component made with [styled-components](https://styled-components.com).

## Table of Contents

- [Documentation](https://devlaunch.github.io/dev-starter)
- [Why?](#why)
- [Installation](#installation)
- [Usage](#usage)
- [Properties](#properties)
- [Related](#related)
- [License](#license)

## Why?

This is a modular approach to use [bootstrap](https://getbootstrap.com) components for quick prototypes, as an entrypoint of your own component library, or if you need just one [bootstrap](https://getbootstrap.com) component for your application. To work with ease with any other libary or framework this component is built with [styled-components](https://styled-components.com).

## Installation

> Note: this component has a peer dependency on `styled-components` and `styled-system`. To use this component you also need to `npm i styled-components styled-system -S`.

```sh
$ npm i @devlaunch/ui-button -S
```

or

```sh
$ yarn add @devlaunch/ui-button
```

## Usage

For detailed information take a look at the [documentation](https://devlaunch.github.io/dev-starter).

To use HTML that uses the Boostrap style, use [ui-base](https://github.com/devlaunch/dev-starter/blob/master/packages/ui-base/README.md).

```jsx
/*
  if you installed `@devlaunch/ui-button` use

    import { ... } from '@devlaunch/ui-button'

  instead.
*/
import {
  Button,
  LinkButton,
  ButtonGroups,
  ButtonToolbar,
} from '@devlaunch/ui-button';

const MyButtonComponent = (props) => (
  {/* use different props to change the visual appearance */}
  <Button primary outline disabled>My Button</Button>
);

const MyButtonGroupComponent = (props) => (
  {/* use different props to change the visual appearance */}
  <ButtonGroup>
    <Button secondary>Left</Button>
    <Button secondary>Middle</Button>
    <Button secondary>Right</Button>
  </ButtonGroup>
);

const MyButtonToolbarComponent = (props) => (
  {/* use different props to change the visual appearance */}
  <ButtonToolbar>
    <ButtonGroup mr="0.5rem">
      <LinkButton secondary>1</LinkButton>
      <LinkButton secondary>2</LinkButton>
      <LinkButton secondary>3</LinkButton>
      <LinkButton secondary>4</LinkButton>
    </ButtonGroup>
    <ButtonGroup mr="0.5rem">
      <LinkButton secondary>5</LinkButton>
      <LinkButton secondary>6</LinkButton>
      <LinkButton secondary>7</LinkButton>
    </ButtonGroup>
    <ButtonGroup>
      <LinkButton secondary>8</LinkButton>
    </ButtonGroup>
  </ButtonToolbar>
);
```

## Properties

Properties which can be added to the component to change the visual appearance.

- `pill` only on Button, LinkButton **Type**: boolean
- `noRadius` only on Button, LinkButton **Type**: boolean
- `primary` **Type**: boolean
- `secondary` **Type**: boolean
- `success` **Type**: boolean
- `danger` **Type**: boolean
- `warning` **Type**: boolean
- `info` **Type**: boolean
- `light` **Type**: boolean
- `dark` **Type**: boolean
- `active` **Type**: boolean
- `disabled` **Type**: boolean
- `outline` **Type**: boolean
- `block` **Type**: boolean
- `sm` small **Type**: boolean
- `lg` large **Type**: boolean
- `vertical` only on ButtonGroup **Type**: boolean

## Related

- [bootstrap](https://getbootstrap.com)
- [styled-components](https://styled-components.com)

## License

MIT © Devlaunch
