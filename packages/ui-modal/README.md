# @devlaunch/ui-modal

[![npm](https://img.shields.io/npm/v/@devlaunch/ui-modal.svg?style=flat-square)](https://www.npmjs.com/package/@devlaunch/ui-modal)
[![Travis branch](https://img.shields.io/travis/devlaunch/dev-starter/master.svg?style=flat-square)](https://travis-ci.org/devlaunch/dev-starter)
[![Codecov branch](https://img.shields.io/codecov/c/github/devlaunch/dev-starter/master.svg?style=flat-square)](https://codecov.io/gh/devlaunch/dev-starter)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://devlaunch.github.io/dev-starter)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) modal component made with [styled-components](https://styled-components.com).

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
$ npm i @devlaunch/ui-modal
```

or

```sh
$ yarn add @devlaunch/ui-modal
```

## Usage

For detailed information take a look at the [documentation](https://devlaunch.github.io/dev-starter).

> Note: if you want this example to work you need to install `@devlaunch/ui-container`, and `@devlaunch/ui-button` as well, but you do not need a `<Container />` component or a `<Button />`  to work with `@devlaunch/ui-modal`.

```jsx
import React from 'react';

/*
  if you installed `dev-starter` use

    import { ... } from 'dev-starter'

  instead.
*/
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from '@devlaunch/ui-modal';
import { Container } from '@devlaunch/ui-container';
import { Button } from '@devlaunch/ui-button';

export class MyModal extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hidden: true,
    };
  }

  handleModal() {
    this.setState({
      hidden: !this.state.hidden,
    });
  }

  render() {
    const { hidden } = this.state;
    return (
      <div>
        <Modal hidden={hidden}>
          <ModalDialog>
            <ModalContent>
              <ModalHeader>
                <ModalTitle>
                  Modal Title
                </ModalTitle>
                <Button outline onClick={() => this.handleModal()}>
                  <span aria-hidden="true">&times;</span>
                </Button>
                </ModalHeader>
                <ModalBody>
                  <p>
                    Modal Body
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={() => this.handleModal()}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalHeader>
            </ModalContent>
          </ModalDialog>
        </Modal>
        <Button onClick={() => this.handleModal()} >
          Launch Modal
        </Button>
      <div>
    );
  }
};
```

## Properties

Properties which can be added to the component to change the visual appearance. This component uses [styled-system](http://jxnblk.com/styled-system/).

* `sm` only on Modal **Type**: boolean
* `lg` only on Modal **Type**: boolean
* `hidden` only on Modal **Type**: boolean
* `centered` only on ModalDialog **Type**: boolean
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
