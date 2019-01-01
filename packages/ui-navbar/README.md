# @devlaunch/ui-navbar

[![npm](https://img.shields.io/npm/v/@devlaunch/ui-navbar.svg?style=flat-square)](https://www.npmjs.com/package/@devlaunch/ui-navbar) [![Travis branch](https://img.shields.io/travis/devlaunch/dev-starter/master.svg?style=flat-square)](https://travis-ci.org/devlaunch/dev-starter) [![docz](https://img.shields.io/badge/docs%20with-docz-f1618c.svg?style=flat-square)](https://devlaunch.github.io/dev-starter) [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg?style=flat-square)](https://lernajs.io/)

> The [bootstrap](https://getbootstrap.com) navbar component made with [styled-components](https://styled-components.com).

## Installation

> Note: this component has a peer dependency on `styled-components` and `styled-system`. To use this component you also need to `npm i styled-components styled-system -S`.

```sh
$ npm i @devlaunch/ui-navbar -S
```

or

```sh
$ yarn add @devlaunch/ui-navbar
```

## Usage

For detailed information take a look at the [documentation](https://devlaunch.github.io/dev-starter).

> Note: if you want this example to work you need to install `@devlaunch/ui-container`, `@devlaunch/ui-button`, and `@devlaunch/ui-nav` as well

```jsx
import React from "react";

/*
  if you installed `@devlaunch/ui-components` use

    import { ... } from '@devlaunch/ui-components'

  instead.
*/
import { Container } from "@devlaunch/ui-container";
import { Button } from "@devlaunch/ui-button";
import { Navbar, NavbarLink } from "@devlaunch/ui-navbar";
import { Nav } from "@devlaunch/ui-nav";

export class NavbarLight extends React.Component {
  constructor(props) {
    super();
    this.state = {
      hidden: true
    };
  }

  handleOpenCloseNav() {
    this.setState({
      hidden: !this.state.hidden
    });
  }

  render() {
    const { hidden } = this.state;
    return (
      <Container fluid>
        <Container fluid>
          <Navbar expandSm light>
            <Nav start>
              <NavbarLink light brand href="#">
                BRAND
              </NavbarLink>
              <Button light outline toggleCollapse expandSm onClick={() => this.handleOpenCloseNav()}>
                <span>&#9776;</span>
              </Button>
            </Nav>
            <Nav start collapse expandSm hidden={hidden}>
              <NavbarLink light active href="#">
                Active
              </NavbarLink>
              <NavbarLink light href="#">
                Link
              </NavbarLink>
              <NavbarLink light href="#">
                Link
              </NavbarLink>
              <NavbarLink light disabled href="#">
                Disabled
              </NavbarLink>
            </Nav>
          </Navbar>
        </Container>
      </Container>
    );
  }
}
```

Usage with [react-router-dom](https://reacttraining.com/react-router/web/example/basic).

Just wrap the NavbarLink with the `<Link />` component from `react-router-dom`.

```jsx
const myLinkComponent = () => (
  <div>
    <Link to="#">
      <NavbarLink light active>
        Active
      </NavbarLink>
    </Link>
    <Link to="#">
      <NavbarLink light>Link</NavbarLink>
    </Link>
    <Link to="#">
      <NavbarLink light>Link</NavbarLink>
    </Link>
    <Link to="#">
      <NavbarLink light disabled>
        Disabled
      </NavbarLink>
    </Link>
  </div>
);
```

## Properties

Properties which can be added to the component to change the visual appearance. This component uses [styled-system](http://jxnblk.com/styled-system/).


NavBar Properties

| Prop               | Type    | Description                       |
| ------------------ | ------- | --------------------------------- |
| `light`            | Boolean | light backgroud mode for navbar   |
| `dark`             | Boolean | dark backgroud mode for navbar    |
| `expandSm` or `sm` | Boolean | fill width 100% on small devices  |
| `expandMd` or `md` | Boolean | fill width 100% on medium devices |
| `expandLg` or `lg` | Boolean | fill width 100% on large devices  |
| `expandXl` or `xl` | Boolean | fill width 100% on desktop        |

NavBarLink Properties

| Prop               | Type    | Description                                   |
| ------------------ | ------- | --------------------------------------------- |
| `light`            | Boolean | light backgroud mode for navbarlink           |
| `dark`             | Boolean | dark backgroud mode for navbarlink            |
| `expandSm` or `sm` | Boolean | fill width 100% on small devices              |
| `expandMd` or `md` | Boolean | fill width 100% on medium devices             |
| `expandLg` or `lg` | Boolean | fill width 100% on large devices              |
| `expandXl` or `xl` | Boolean | fill width 100% on desktop                    |
| `brand`            | Boolean | make the link a brand logo with extra padding |

## Related

- [bootstrap](https://getbootstrap.com)
- [styled-components](https://styled-components.com)

## License

MIT © Devlaunch
