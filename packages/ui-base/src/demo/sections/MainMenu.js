import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@devlaunch/ui-container";

export const MainMenu = () => (
  <Container>
    {" "}
    <div>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/html">
        <button>Global Html Styles</button>
      </Link>
      <Link to="/link">
        <button>Link Component</button>
      </Link>
      <Link to="/text">
        <button>Text Components</button>
      </Link>
      <Link to="/article">
        <button>Article Components</button>
      </Link>
      <Link to="/form">
        <button>Form Components</button>
      </Link>
      <Link to="/image">
        <button>Image Components</button>
      </Link>
      <Link to="/list">
        <button>List Components</button>
      </Link>
      <Link to="/table">
        <button>Article Components</button>
      </Link>
    </div>
  </Container>
);
