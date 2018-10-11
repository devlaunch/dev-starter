import React from "react";
import { Link } from "react-router-dom";
import { Absolute, Box, Image, BlockLink } from "rebass";

import { Toolbar, NavLink } from "components";

const Header = props => {
  let links = null;
  if (props.currentUser) {
    links = (
      <Box>
        <NavLink color="gray.6" href="/editor">
          <i className="ion-compose" />
          &nbsp;New Post
        </NavLink>
        <NavLink color="gray.6" href="/settings">
          <i className="ion-gear-a" />
          &nbsp;Settings
        </NavLink>
        <BlockLink color="gray.6" href={`/@${props.currentUser.username}`}>
          <Image
            src={props.currentUser.image}
            alt={props.currentUser.username}
          />
          {props.currentUser.username}
        </BlockLink>
      </Box>
    );
  } else {
    links = (
      <Box>
        <NavLink color="gray.6" href="/login">
          Sign in
        </NavLink>
        <NavLink color="gray.6" href="/register">
          Sign up
        </NavLink>
      </Box>
    );
  }
  return (
    <Absolute z={2} top={0} left={0} right={0}>
      <Toolbar px={[0, 3]} bg="white">
        <NavLink is={Link} color="gray.7" to="/">
          {props.appName}
        </NavLink>
        <Box mx="auto" />
        {links}
      </Toolbar>
    </Absolute>
  );
};

export default Header;
