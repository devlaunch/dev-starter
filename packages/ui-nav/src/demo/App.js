import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@devlaunch/ui-config";
import { Nav, NavLink } from "lib";

/* use different props to change visual the appearance */
const MyNavWithATag = props => (
  <Nav vertical>
    <NavLink tabs active href="#">
      Active
    </NavLink>
    <NavLink tabs href="#">
      Link
    </NavLink>
    <NavLink tabs href="#">
      Link
    </NavLink>
    <NavLink tabs disabled href="#">
      Disabled
    </NavLink>
  </Nav>
);

const App = () => (
  <ThemeProvider theme={{ ...theme }}>
    <MyNavWithATag />
  </ThemeProvider>
);

export default App;
