# @devlaunch/ui-badge

[![npm](https://img.shields.io/npm/v/@devlaunch/ui-badge.svg?style=flat-square)](https://www.npmjs.com/package/@devlaunch/ui-badge) [![Travis branch](https://img.shields.io/travis/devlaunch/dev-starter/master.svg?style=flat-square)](https://travis-ci.org/devlaunch/dev-starter) [![docz](https://img.shields.io/badge/docs%20with-docz-f1618c.svg?style=flat-square)](https://devlaunch.github.io/dev-starter) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) badge component made with [styled-components](https://styled-components.com)

## Installation

> Note: this component has a peer dependency on `styled-components` and `styled-system`. To use this component you also need to `npm i styled-components styled-system -S`.

```sh
$ npm i @devlaunch/ui-badge -S
```

or

```sh
$ yarn add @devlaunch/ui-badge
```

## Usage

```jsx
/*
  if you installed `devlaunch` use

    import { ... } from '@devlaunch/ui-components'

  instead.
*/
import { Badge } from '@devlaunch/ui-badge';

const MyBadgeComponent = (props) => (
  {/*
    Use different props to change the visual appearance.
    Use the Bagde component as wrapper for links or headings.
  */}
  <Badge primary pill>
    Primary
  </Badge>
);
```

## Properties

Properties which can be added to the component to change the visual appearance. This component uses [styled-system](http://jxnblk.com/styled-system/).


| Prop                                        | Type                       | Description                                                                                                          |
| ------------------------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `modifiers`                                 | Array of strings           | Array of modifiers - oneof - `pill`, `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark` |
| `mx`, `my`, `px`, `py` ...                  | Array of numbers           | styled-system space prop for use as margin and padding values                                                        |
| `width`                                     | Array of numbers or string | styled-system width propTypes for specifying width                                                                   |
| `color` , `bg`                              | String                     | styled-system color prop from theme.color object for specifying colors                                               |
| `fontSize`                                  | Array of numbers           | styled-system fontSize prop from theme.fontSizes object                                                              |
| `fontWeight`, `textAlign`, `lineHeight`     | Array of strings           | styled-system typography prop                                                                                        |
| `display`                                   | Array of strings           | styled-system layout prop one of `block`, `inline-block`                                                             |
| `border`, `borderColor`, `borderRadius` ... | String                     | styled-system border prop                                                                                            |


## Related

- [bootstrap](https://getbootstrap.com)
- [styled-components](https://styled-components.com)
- [styled-system](http://jxnblk.com/styled-system/)

## License

MIT © Devlaunch
