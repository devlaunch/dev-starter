# @devlaunch/ui-popover

[![npm](https://img.shields.io/npm/v/@devlaunch/ui-popover.svg?style=flat-square)](https://www.npmjs.com/package/@devlaunch/ui-popover)
[![Travis branch](https://img.shields.io/travis/devlaunch/dev-starter/master.svg?style=flat-square)](https://travis-ci.org/devlaunch/dev-starter)
[![Codecov branch](https://img.shields.io/codecov/c/github/devlaunch/dev-starter/master.svg?style=flat-square)](https://codecov.io/gh/devlaunch/dev-starter)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://devlaunch.github.io/dev-starter)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) popover component made with [styled-components](https://styled-components.com).

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
$ npm i @devlaunch/ui-popover -S
```

or

```sh
$ yarn add @devlaunch/ui-popover
```

## Usage

For detailed information take a look at the [documentation](https://devlaunch.github.io/dev-starter).

> Note: if you want this example to work you need to install `@devlaunch/ui-container`, and `@devlaunch/ui-button` as well, but you do not need them to work properly

```jsx
import React from 'react';

/*
  if you installed `dev-starter` use

    import { ... } from 'dev-starter'

  instead.
*/
import { Container } from '@devlaunch/ui-container';
import { Button } from '@devlaunch/ui-button';
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverHeader,
} from '@devlaunch/ui-popover';

export class SimplePopoverToggle extends React.Component {
  constructor(props) {
    super();
    this.state = {
      top: 0,
      left: 0,
      hidden: true,
    };
  }

  handleModal(ev) {
    this.setState({
      top: ev.target.offsetTop - ev.target.offsetHeight,
      left: ev.target.offsetLeft + ev.target.offsetWidth,
      hidden: !this.state.hidden,
    });
  }

  render() {
    const {
      top,
      left,
      hidden,
    } = this.state;

    return (
      <Container>
        <Button
          danger
          onClick={(ev) => this.handleModal(ev)}
        >
          Click to toggle popover
        </Button>
        <Popover
          hidden={hidden}
          style={{
            top: `${top}px`,
            left: `${left}px`
          }}
          right
        >
          <PopoverArrow right />
          <PopoverHeader right>Popover Title</PopoverHeader>
          <PopoverBody right>And here's some amazing content. It's very engaging. Right?</PopoverBody>
        </Popover>
      </Container>
    );
  }
};
```

## Properties

Properties which can be added to the component to change the visual appearance. This component uses [styled-system](http://jxnblk.com/styled-system/).

* `hidden` **Type**: boolean
* `right` **Type**: boolean
* `top` **Type**: boolean
* `left` **Type**: boolean
* `bottom` **Type**: boolean
* `m` margin **Type**: string
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
