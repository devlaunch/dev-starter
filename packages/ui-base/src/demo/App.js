import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HtmlExamples } from "./sections/HtmlExamples";
import { MainMenu } from "./sections/MainMenu";
import { LinkExamples } from "./sections/LinkExamples";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={MainMenu} />
      <Route exact path="/html" component={HtmlExamples} />
      <Route exact path="/link" component={LinkExamples} />
      <Route exact path="/text" component={MainMenu} />
      <Route exact path="/article" component={MainMenu} />
      <Route exact path="/form" component={MainMenu} />
      <Route exact path="/image" component={MainMenu} />
      <Route exact path="/list" component={MainMenu} />
      <Route exact path="/table" component={MainMenu} />
    </div>
  </Router>
);

export default App;
