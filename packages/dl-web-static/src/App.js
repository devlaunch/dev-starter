import React from "react";
import { Root, Routes } from "react-static";
import { Link } from "@reach/router";
import { ThemeProvider } from "styled-components";

import { theme } from "";

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </Root>
  );
}

export default App;
