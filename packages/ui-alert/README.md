# @devlaunch/ui-alert

[![npm](https://img.shields.io/npm/v/@devlaunch/ui-alert.svg?style=flat-square)](https://www.npmjs.com/package/@devlaunch/ui-alert)
[![Travis branch](https://img.shields.io/travis/devlaunch/dev-starter/master.svg?style=flat-square)](https://travis-ci.org/devlaunch/dev-starter)
[![Codecov branch](https://img.shields.io/codecov/c/github/devlaunch/dev-starter/master.svg?style=flat-square)](https://codecov.io/gh/devlaunch/dev-starter)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://devlaunch.github.io/dev-starter)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) alert component made with [styled-components](https://styled-components.com)

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
$ npm i @devlaunch/ui-alert -S
```

or

```sh
$ yarn add @devlaunch/ui-alert
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
  Alert,
  AlertHeading,
} from '@devlaunch/ui-alert';

const MyAlertComponent = (props) => (
  {/* use different props to change the visual appearance */}
  <Alert success>
    <h4>
    Well done!
    </h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada ante metus, eu tempus erat ultricies imperdiet.
    </p>
    <hr />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </Alert>
);
```

## Properties

Properties which can be added to the component to change the visual appearance. This component uses [styled-system](http://jxnblk.com/styled-system/).

* `pill` **Type**: boolean
* `primary` **Type**: boolean
* `secondary` **Type**: boolean
* `success` **Type**: boolean
* `danger` **Type**: boolean
* `warning` **Type**: boolean
* `info` **Type**: boolean
* `light` **Type**: boolean
* `dark` **Type**: boolean
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
