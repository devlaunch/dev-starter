import React from 'react';
import { Absolute, Box, Image, BlockLink } from 'rebass';

import { Toolbar, NavLink } from 'components';

const Header = (props) => {
  let links = null;
  if (props.currentUser) {
    links = (
      <Box>
        <NavLink color="gray8" href="/editor">
          <i className="ion-compose" />&nbsp;New Post
        </NavLink>
        <NavLink color="gray8" href="/settings">
          <i className="ion-gear-a" />&nbsp;Settings
        </NavLink>
        <BlockLink color="gray8" href={`/@${props.currentUser.username}`}>
          <Image src={props.currentUser.image} alt={props.currentUser.username} />
          {props.currentUser.username}
        </BlockLink>
      </Box>
    );
  } else {
    links = (
      <Box>
        <NavLink color="gray8" href="/login">
          Sign in
        </NavLink>
        <NavLink color="gray8" href="/register">
          Sign up
        </NavLink>
      </Box>
    );
  }
  return (
    <Absolute z={2} top={0} left={0} right={0}>
      <Toolbar bg="white" {...props}>
        <NavLink color="gray8" href="/">
          {props.appName}
        </NavLink>
        <Box mx="auto" />
        {links}
      </Toolbar>
    </Absolute>
  );
};

export default Header;
