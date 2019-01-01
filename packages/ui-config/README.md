# @devlaunch/ui-config

[![npm](https://img.shields.io/npm/v/@devlaunch/ui-config.svg?style=flat-square)](https://www.npmjs.com/package/@devlaunch/ui-config)
[![Travis branch](https://img.shields.io/travis/devlaunch/dev-starter/master.svg?style=flat-square)](https://travis-ci.org/devlaunch/dev-starter)
[![Codecov branch](https://img.shields.io/codecov/c/github/devlaunch/dev-starter/master.svg?style=flat-square)](https://codecov.io/gh/devlaunch/dev-starter)
[![storybook](https://img.shields.io/badge/docs%20with-storybook-f1618c.svg?style=flat-square)](https://devlaunch.github.io/dev-starter)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The configuration for dev-starter

## Installation

```sh
$ npm i @devlaunch/ui-config -S
```

or

```sh
$ yarn add @devlaunch/ui-config
```

## Usage

This package holds the theme for the styled-bootstrap-components.

You can use is to customize your components.

```js
import { ThemeProvider } from 'styled-components';
import { theme } from '@devlaunch/ui-config';
import { Button  } from '@devlaunch/ui-button';

// change the colors of a primary button in your app
const App = (props) => (
  <ThemeProvider
    theme={{
      ...theme
      button: {
        colors: {
          primary:  {
            color: 'white',
            backgroundColor: 'lightgreen',
            backgroundColorHoverFocus: 'green',
          },
        },
      },
    }}
  >
    <Button primary>Hi, I'm a green primary button</Button>
  </ThemeProvider>
)
```

To see how to modify all the styled-bootstrap-components to create your own UI component library take a look at the [theme](https://github.com/devlaunch/dev-starter/blob/master/packages/ui-config/test/fixtures/index.js)

## Related

- [bootstrap](https://getbootstrap.com)
- [styled-components](https://styled-components.com)

## License

MIT © Devlaunch
