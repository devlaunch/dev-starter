# @devlaunch/ui-form

[![npm](https://img.shields.io/npm/v/@devlaunch/ui-form.svg?style=flat-square)](https://www.npmjs.com/package/@devlaunch/ui-form)
[![Travis branch](https://img.shields.io/travis/devlaunch/dev-starter/master.svg?style=flat-square)](https://travis-ci.org/devlaunch/dev-starter)
[![Codecov branch](https://img.shields.io/codecov/c/github/devlaunch/dev-starter/master.svg?style=flat-square)](https://codecov.io/gh/devlaunch/dev-starter)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://devlaunch.github.io/dev-starter)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) form component made with [styled-components](https://styled-components.com).

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
$ npm i @devlaunch/ui-form -S
```

or

```sh
$ yarn add @devlaunch/ui-form
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
  Button,
  ButtonGroups,
  ButtonToolbar,
} from '@devlaunch/ui-form';

const MyFormComponent = (props) => (
  {/* use different props to change the visual appearance */}
  <form>
    <FormGroup>
      <Label>Email address</Label>
      <FormControl type="email" placeholder="name@example.com" />
    </FormGroup>
    <FormGroup>
      <Label>Example select</Label>
      <FormControl select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </FormControl>
    </FormGroup>
    <FormGroup>
      <Label>Example multiple select</Label>
      <FormControl select multiple>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </FormControl>
    </FormGroup>
    <FormGroup>
      <Label>Example textarea</Label>
      <FormControl textarea rows="3" />
    </FormGroup>
    <FormGroup>
      <Label>Example file input</Label>
      <FormControlFile type="file" />
    </FormGroup>
  </form>
);

const MyInputGroupComponent = (props) => (
  {/* use different props to change the visual appearance */}
  <InputGroup>
    <InputGroupPrepend>
      <InputGroupText>@</InputGroupText>
    </InputGroupPrepend>
    <FormControl type="text" placeholder="Username" />
  </InputGroup>
);
```

## Properties

Properties which can be added to the component to change the visual appearance. This component uses [styled-system](http://jxnblk.com/styled-system/).

* `inline` only on FormCheck, FormControlPlainText **Type**: boolean
* `disabled` only on FormCheckInput, FormControl **Type**: boolean
* `readonly` only on FormControl **Type**: boolean
* `valid` only on FormControl **Type**: boolean
* `invalid` only on FormControl **Type**: boolean
* `formInline` only on FormControl, FormGroup **Type**: boolean
* `sm` small, only on FormControl, FormControlPlainText, FormGroup, InputGroup **Type**: boolean
* `lg` large, only on FormControl, FormControlPlainText, FormGroup, InputGroup **Type**: boolean
* `multiple` only on FormControl **Type**: boolean
* `select` only on FormControl **Type**: boolean
* `textarea` only on FormControl **Type**: boolean
* `row` only on FormGroup **Type**: boolean
* `nomb` no margin-bottom, only on FormGroup **Type**: boolean
* `justify` only on FormGroup **Type**: boolean
* `muted` only on FormText **Type**: boolean
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
