# @devlaunch/ui-container

[![npm](https://img.shields.io/npm/v/@devlaunch/ui-container.svg?style=flat-square)](https://www.npmjs.com/package/@devlaunch/ui-container)
[![Travis branch](https://img.shields.io/travis/devlaunch/dev-starter/master.svg?style=flat-square)](https://travis-ci.org/devlaunch/dev-starter)
[![docz](https://img.shields.io/badge/docs%20with-docz-f1618c.svg?style=flat-square)](https://devlaunch.github.io/dev-starter) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) container component made with [styled-components](https://styled-components.com)

## Installation

> Note: this component has a peer dependency on `styled-components` and `styled-system`. To use this component you also need to `npm i styled-components styled-system -S`.

```sh
$ npm i @devlaunch/ui-container -S
```

or

```sh
$ yarn add @devlaunch/ui-container
```

## Usage

For detailed information take a look at the [documentation](https://devlaunch.github.io/dev-starter).

```jsx
/*
  if you installed `dev-starter` use

    import { ... } from 'dev-starter'

  instead.
*/
import { Container } from '@devlaunch/ui-container';

const MyContainerComponent = (props) => (
  {/* fixed width for small, medium, large and xlarge screen width */}
  <Container>
    {props.children}
  </Container>
);

const MyContainerFluidComponent = (props) => (
  {/* always 100% width */}
  <Container fluid>
    {props.children}
  </Container>
);
```

## Properties

Properties which can be added to the component to change the visual appearance.
| Prop    | Type    | Description                           |
| ------- | ------- | ------------------------------------- |
| `fluid` | boolean | width of the container is always 100% |

## Related

- [bootstrap](https://getbootstrap.com)
- [styled-components](https://styled-components.com)

## License

MIT © Devlaunch
