import React from "react";
import { screenSize } from "lib";

const App = () => (
  <div>
    Small 576px == {screenSize.sm} <br />
    Medium 768px == {screenSize.md} <br />
    Large 992px == {screenSize.lg} <br />
    XtraLarge 1200px == {screenSize.xl} <br />
  </div>
);

export default App;
