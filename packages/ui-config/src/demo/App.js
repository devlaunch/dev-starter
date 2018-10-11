import React from "react";
import { screenSize } from "../lib";

const App = () => (
  <div>
    Small 576px {screenSize.sm}
    Medium 768px {screenSize.md}
    Large 992px {screenSize.lg}
    XtraLarge 1200px {screenSize.xl}
  </div>
);

export default App;
