import React from "react";
import { Root, Routes } from "react-static";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { BootstrapBaseCss } from "@devlaunch/ui-base";

import NavbarLight from "./components/NavbarLight";
import { theme } from "./theme";

function App() {
  return (
    <Root>
      <ThemeProvider theme={{ ...theme }}>
        <React.Fragment>
          <BootstrapBaseCss />
          <NavbarLight />
          <div className="content">
            <Switch>
              <Route render={() => <Routes />} />
            </Switch>
          </div>
        </React.Fragment>
      </ThemeProvider>
    </Root>
  );
}

export default App;
