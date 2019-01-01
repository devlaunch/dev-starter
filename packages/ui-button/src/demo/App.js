import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@devlaunch/ui-config";

import { Button, LinkButton, ButtonGroup, ButtonToolbar } from "lib";

const MyButtonComponent = () => (
  <div>
    {/* use different props to change the visual appearance */}
    <Button primary outline disabled>
      My Button
    </Button>
  </div>
);

const MyButtonGroupComponent = props => (
  <div>
    {/* use different props to change the visual appearance */}
    <ButtonGroup>
      <Button secondary>Left</Button>
      <Button secondary>Middle</Button>
      <Button secondary>Right</Button>
    </ButtonGroup>
  </div>
);

const MyButtonToolbarComponent = props => (
  <div>
    {/* use different props to change the visual appearance */}
    <ButtonToolbar>
      <ButtonGroup mr="0.5rem">
        <LinkButton secondary>1</LinkButton>
        <LinkButton secondary>2</LinkButton>
        <LinkButton secondary>3</LinkButton>
        <LinkButton secondary>4</LinkButton>
      </ButtonGroup>
      <ButtonGroup mr="0.5rem">
        <LinkButton secondary>5</LinkButton>
        <LinkButton secondary>6</LinkButton>
        <LinkButton secondary>7</LinkButton>
      </ButtonGroup>
      <ButtonGroup>
        <LinkButton secondary>8</LinkButton>
      </ButtonGroup>
    </ButtonToolbar>
  </div>
);

const App = () => (
  <ThemeProvider theme={{ ...theme }}>
    <div>
      <Button primary>Hi, I'm a primary button</Button>
      <MyButtonComponent />
      <MyButtonGroupComponent />
      <MyButtonToolbarComponent />
    </div>
  </ThemeProvider>
);

export default App;
