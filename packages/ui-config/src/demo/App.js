import React from "react";
import { theme } from "@devlaunch/ui-config";
import { Button } from "@devlaunch/ui-button";

const App = () => (
  <ThemeProvider
    theme={{
      ...theme,
      button: {
        colors: {
          primary: {
            color: "white",
            backgroundColor: "lightgreen",
            backgroundColorHoverFocus: "green"
          }
        }
      }
    }}
  >
    <Button primary>Hi, I'm a green primary button</Button>
  </ThemeProvider>
);

export default App;
