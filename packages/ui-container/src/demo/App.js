import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "@devlaunch/ui-config";

import { Container } from "lib";

/* fixed width for small, medium, large and xlarge screen width */
const MyContainerComponent = props => <Container md>{props.children}</Container>;

/* always 100% width */
const MyContainerFluidComponent = props => <Container fluid>{props.children}</Container>;

const MyHeader = styled.div`
  height: 3rem;
  margin-bottom: 0.5rem;
  background-color: #fff;
  border-radius: 0.25rem;
`;

const MySidebar = styled.div`
  float: right;
  width: 4rem;
  height: 8rem;
  background-color: #80bdff;
  border-radius: 0.25rem;
`;

const MyBody = styled.div`
  height: 8rem;
  margin-right: 4.5rem;
  background-color: #957bbe;
  border-radius: 0.25rem;
`;

const App = () => (
  <ThemeProvider theme={{ ...theme }}>
    <div>
      <MyContainerComponent>
        <MyHeader />
        <MySidebar />
        <MyBody />
      </MyContainerComponent>
      <MyContainerFluidComponent>
        <MyHeader />
        <MySidebar />
        <MyBody />
      </MyContainerFluidComponent>
    </div>
  </ThemeProvider>
);

export default App;
