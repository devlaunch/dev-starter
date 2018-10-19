# @devlaunch/ui-alert

[![npm](https://img.shields.io/npm/v/@devlaunch/ui-alert.svg?style=flat-square)](https://www.npmjs.com/package/@devlaunch/ui-alert) [![Travis branch](https://img.shields.io/travis/devlaunch/dev-starter/master.svg?style=flat-square)](https://travis-ci.org/devlaunch/dev-starter) [![docz](https://img.shields.io/badge/docs%20with-docz-f1618c.svg?style=flat-square)](https://devlaunch.github.io/dev-starter) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) alert component made with [styled-components](https://styled-components.com). Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

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
  if you installed `devlaunch` use

    import { ... } from '@devlaunch/ui-components'

  instead.
*/
import { Alert } from '@devlaunch/ui-alert';

const MyAlertComponent = (props) => (
  {/* use different props to change the visual appearance */}
  <Alert modifiers={["success"]}>
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

| Prop                                        | Type                       | Description                                                                                                  |
| ------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `modifiers`                                 | Array of strings           | Array of modifiers - oneof - `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark` |
| `mx`, `my`, `px`, `py` ...                  | Array of numbers           | styled-system space prop for use as margin and padding values                                                |
| `width`                                     | Array of numbers or string | styled-system width propTypes for specifying width                                                           |
| `color` , `bg`                              | String                     | styled-system color prop from theme.color object for specifying colors                                       |
| `fontSize`                                  | Array of numbers           | styled-system fontSize prop from theme.fontSizes object                                                      |
| `fontWeight`, `textAlign`, `lineHeight`     | Array of strings           | styled-system typography prop                                                                                |
| `display`                                   | Array of strings           | styled-system layout prop one of `block`, `inline-block`                                                     |
| `border`, `borderColor`, `borderRadius` ... | String                     | styled-system border prop                                                                                    |

## Related

- [bootstrap](https://getbootstrap.com)
- [styled-components](https://styled-components.com)
- [styled-system](http://jxnblk.com/styled-system/)

## License

MIT © Devlaunch
