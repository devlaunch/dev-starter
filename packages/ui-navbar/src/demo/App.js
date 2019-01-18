import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@devlaunch/ui-config";
import { Button } from "@devlaunch/ui-button";
import { Container } from "@devlaunch/ui-container";
import { Nav } from "@devlaunch/ui-nav";
import { Navbar, NavbarLink } from "lib";

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
              <Button
                light
                outline
                toggleCollapse
                expandSm
                onClick={() => this.handleOpenCloseNav()}
              >
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

const App = () => (
  <ThemeProvider theme={{ ...theme }}>
    <NavbarLight />
  </ThemeProvider>
);

export default App;
