# @devlaunch/ui-nav

[![npm](https://img.shields.io/npm/v/@devlaunch/ui-nav.svg?style=flat-square)](https://www.npmjs.com/package/@devlaunch/ui-nav)
[![Travis branch](https://img.shields.io/travis/devlaunch/dev-starter/master.svg?style=flat-square)](https://travis-ci.org/devlaunch/dev-starter)
[![Codecov branch](https://img.shields.io/codecov/c/github/devlaunch/dev-starter/master.svg?style=flat-square)](https://codecov.io/gh/devlaunch/dev-starter)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://devlaunch.github.io/dev-starter)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) nav component made with [styled-components](https://styled-components.com).

## Installation

> Note: this component has a peer dependency on `styled-components` and `styled-system`. To use this component you also need to `npm i styled-components styled-system -S`.

```sh
$ npm i @devlaunch/ui-nav
```

or

```sh
$ yarn add @devlaunch/ui-nav
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
  Nav,
  NavLink,
} from '@devlaunch/ui-nav';

const MyNavWithATag = (props) => (
  {/* use different props to change visual the appearance */}
  <Nav vertical>
    <NavLink tabs active href="#">Active</NavLink>
    <NavLink tabs href="#">Link</NavLink>
    <NavLink tabs href="#">Link</NavLink>
    <NavLink tabs disabled href="#">Disabled</NavLink>
  </Nav>
);
```

Usage with [react-router-dom](https://reacttraining.com/react-router/web/example/basic).

```jsx
/*
  if you installed `dev-starter` use

    import { ... } from 'dev-starter'

  instead.
*/
import {
  Nav,
  NavLink,
} from '@devlaunch/ui-nav';
import { Link } from 'react-router-dom';

const MyNavWithReactRouterDom = (props) => (
  {/* use different props to change visual the appearance */}
  <Nav vertical>
    <Link to="#">
      <NavLink tabs active>Active</NavLink>
    </Link>
    <Link to="#">
      <NavLink tabs>Link</NavLink>
    </Link>
    <Link to="#">
      <NavLink tabs>Link</NavLink>
    </Link>
    <Link to="#">
      <NavLink tabs disabled>Disabled</NavLink>
    </Link>
  </Nav>
);
```

## Properties

Properties which can be added to the component to change the visual appearance. This component uses [styled-system](http://jxnblk.com/styled-system/).

- `collapse` only on Nav **Type**: boolean
- `expandSm` only on Nav **Type**: boolean
- `expandMd` only on Nav **Type**: boolean
- `expandLg` only on Nav **Type**: boolean
- `expandXl` only on Nav **Type**: boolean
- `hidden` only on Nav **Type**: boolean
- `start` only on Nav **Type**: string
- `center` only on Nav **Type**: string
- `end` only on Nav **Type**: string
- `vertical` only on Nav **Type**: string
- `justified` only on Nav **Type**: string
- `fill` only on Nav **Type**: string
- `tabs` only on NavLink **Type**: string
- `pills` only on NavLink **Type**: string
- `active` only on NavLink **Type**: string
- `disabled` only on NavLink **Type**: string
- `item` only on NavLink **Type**: string
- `m` margin **Type**: string
- `mt` margin-top **Type**: string
- `mr` margin-right **Type**: string
- `mb` margin-bottom **Type**: string
- `ml` margin-left **Type**: string
- `mx` margin-left and margin-right **Type**: string
- `my` margin-top and margin-bottom **Type**: string
- `p` padding **Type**: string
- `pt` padding-top **Type**: string
- `pr` padding-right **Type**: string
- `pb` padding-bottom **Type**: string
- `pl` padding-left **Type**: string
- `px` padding-left and padding-right **Type**: string
- `py` padding-top and padding-bottom **Type**: string
- `width` **Type**: string
- `fontSize` **Type**: string
- `fontWeight` **Type**: string
- `textAlign` **Type**: string
- `lineHeight` **Type**: string
- `display` **Type**: string
- `color` **Type**: string
- `borderRadius` **Type**: string
- `borderColor` **Type**: string
- `border` **Type**: string
- `borderTop` **Type**: string
- `borderRight` **Type**: string
- `borderBottom` **Type**: string
- `borderLeft` **Type**: string

## Related

- [bootstrap](https://getbootstrap.com)
- [styled-components](https://styled-components.com)
- [styled-system](http://jxnblk.com/styled-system/)

## License

MIT © Devlaunch
