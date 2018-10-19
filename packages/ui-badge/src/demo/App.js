import React from "react";
import { Badge } from "lib";

const App = () => (
  <div>
    <Alert modifiers={["primary"]}>
      This is a primary alert — check it out!
    </Alert>
    <Alert modifiers={["secondary"]}>
      This is a secondary alert — check it out!
    </Alert>
    <Alert modifiers={["success"]}>
      This is a success alert — check it out!
    </Alert>
    <Alert modifiers={["danger"]}>This is a danger alert — check it out!</Alert>
    <Alert modifiers={["warning"]}>
      This is a warning alert — check it out!
    </Alert>
    <Alert modifiers={["info"]}>This is a info alert — check it out!</Alert>
    <Alert modifiers={["light"]}>This is a light alert — check it out!</Alert>
    <Alert modifiers={["dark"]}>This is a dark alert — check it out!</Alert>
  </div>
);

export default App;
