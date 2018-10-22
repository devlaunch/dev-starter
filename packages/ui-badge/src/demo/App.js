import React from "react";
import { Badge } from "lib";

const App = () => (
  <div>
    <Badge modifiers={["primary"]}>Primary</Badge>
    <Badge modifiers={["secondary"]}>Secondary</Badge>
    <Badge modifiers={["success"]}>Success</Badge>
    <Badge modifiers={["danger"]}>Danger</Badge>
    <Badge modifiers={["warning"]}>Warning</Badge>
    <Badge modifiers={["info"]}>Info</Badge>
    <Badge modifiers={["light"]}>Light</Badge>
    <Badge modifiers={["dark"]}>Dark</Badge>
    <br />
    <Badge modifiers={["primary", "pill"]}>Primary</Badge>
    <Badge modifiers={["secondary", "pill"]}>Secondary</Badge>
    <Badge modifiers={["success", "pill"]}>Success</Badge>
    <Badge modifiers={["danger", "pill"]}>Danger</Badge>
    <Badge modifiers={["warning", "pill"]}>Warning</Badge>
    <Badge modifiers={["info", "pill"]}>Info</Badge>
    <Badge modifiers={["light", "pill"]}>Light</Badge>
    <Badge modifiers={["dark", "pill"]}>Dark</Badge>
    <br />
    <Badge modifiers={["primary"]} as="span" href="#">
      <a href="a">Primary </a>
    </Badge>
    <Badge modifiers={["secondary"]} as="a" href="#">
      Secondary
    </Badge>
    <Badge modifiers={["success"]} as="a" href="#">
      Success
    </Badge>
    <Badge modifiers={["danger"]} as="a" href="#">
      Danger
    </Badge>
    <Badge modifiers={["warning"]} as="a" href="#">
      Warning
    </Badge>
    <Badge modifiers={["info"]} as="a" href="#">
      Info
    </Badge>
    <Badge modifiers={["light"]} as="a" href="#">
      Light
    </Badge>
    <Badge modifiers={["dark"]} as="a" href="#">
      Dark
    </Badge>
  </div>
);

export default App;
