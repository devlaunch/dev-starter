# @devlaunch/ui-card

[![npm](https://img.shields.io/npm/v/@devlaunch/ui-card.svg?style=flat-square)](https://www.npmjs.com/package/@devlaunch/ui-card)
[![Travis branch](https://img.shields.io/travis/devlaunch/dev-starter/master.svg?style=flat-square)](https://travis-ci.org/devlaunch/dev-starter)
[![Codecov branch](https://img.shields.io/codecov/c/github/devlaunch/dev-starter/master.svg?style=flat-square)](https://codecov.io/gh/devlaunch/dev-starter)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://devlaunch.github.io/dev-starter)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) card component made with [styled-components](https://styled-components.com).

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
$ npm i @devlaunch/ui-card -S
```

or

```sh
$ yarn add @devlaunch/ui-card
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
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImageHeader,
  CardText,
  CardTitle,
} from '@devlaunch/ui-card';

const MyCardWithImageHeaderComponent = (props) => (
  {/* use different props to change the visual appearance */}
  <Card>
    <CardImageHeader src="my/image/source.jpg" />
    <CardBody>
      <CardText>
        Card Text
      </CardText>
      <CardFooter>
        Card Footer
      </CardFooter>
    </CardBody>
  </Card>
);
```

## Properties

Properties which can be added to the component to change the visual appearance. This component uses [styled-system](http://jxnblk.com/styled-system/).

* `h1` only on CardTitle **Type**: boolean
* `h2` only on CardTitle **Type**: boolean
* `h3` only on CardTitle **Type**: boolean
* `h4` only on CardTitle **Type**: boolean
* `h5` only on CardTitle **Type**: boolean
* `h6` only on CardTitle **Type**: boolean
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
