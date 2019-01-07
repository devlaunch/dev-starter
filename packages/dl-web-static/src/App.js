import React from "react";
import { Root, Routes } from "react-static";
import { Link } from "@reach/router";
import { ThemeProvider } from "styled-components";

import { BootstrapBaseCss } from "@devlaunch/ui-base";
import { theme } from "./theme";

function App() {
  return (
    <Root>
      <ThemeProvider theme={{ ...theme }}>
        <React.Fragment>
          <BootstrapBaseCss />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
          </nav>
          <div className="content">
            <Routes />
          </div>
        </React.Fragment>
      </ThemeProvider>
    </Root>
  );
}

export default App;
