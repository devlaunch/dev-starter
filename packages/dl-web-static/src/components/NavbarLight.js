import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@devlaunch/ui-button";
import { Container } from "@devlaunch/ui-container";
import { Nav } from "@devlaunch/ui-nav";
import { Navbar, NavbarLink } from "@devlaunch/ui-navbar";

export default class NavbarLight extends React.Component {
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
      <Container>
        <Navbar expandSm light>
          <Nav>
            <NavbarLink light brand href="#">
              URBAN RUNNERS
            </NavbarLink>
            <Button light outline toggleCollapse expandSm onClick={() => this.handleOpenCloseNav()}>
              <span>&#9776;</span>
            </Button>
          </Nav>
          <Nav collapse expandSm hidden={hidden}>
            <Link to="/">
              <NavbarLink as="span" light active>
                Overview
              </NavbarLink>
            </Link>
            <Link to="/activities">
              <NavbarLink as="span" light>
                Activities
              </NavbarLink>
            </Link>
            <Link to="/training">
              <NavbarLink as="span" light>
                Training
              </NavbarLink>
            </Link>
            <Link to="/badges">
              <NavbarLink as="span" light>
                Badges
              </NavbarLink>
            </Link>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}
