import React from 'react';
import { Absolute, NavLink, Box, Image, BlockLink } from 'rebass';

import { Toolbar } from 'components';

const LoggedOutLinks = (props) => {
  if (!props.currentUser) {
    return (
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
  return null;
};

const LoggedInLinks = (props) => {
  if (props.currentUser) {
    return (
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
  }

  return null;
};

const Header = props => (
  <Absolute z={2} top left right>
    <Toolbar bg="white" {...props}>
      <NavLink color="gray8" href="/">
        {props.appName}
      </NavLink>
      <Box mx="auto" />
      <LoggedOutLinks currentUser={props.currentUser} />
      <LoggedInLinks currentUser={props.currentUser} />
    </Toolbar>
  </Absolute>

  // <nav className="navbar navbar-light">
  //   <div className="container">
  //     <Link to="/" className="navbar-brand">
  //       {props.appName.toLowerCase()}
  //     </Link>

  //   </div>
  // </nav>
);

export default Header;
