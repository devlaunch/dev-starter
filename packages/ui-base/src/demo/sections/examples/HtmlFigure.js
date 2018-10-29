import React from "react";
import { Container } from "@devlaunch/ui-container";

export const HtmlFigure = () => (
  <Container>
    {" "}
    <figure>
      <img src="https://www.fillmurray.com/505/314" alt="fillmurray" />
      <figcaption>
        Fig1. A picture of Bill Murray from{" "}
        <a href="https://www.fillmurray.com/">fillmurray.com</a>
      </figcaption>
    </figure>
  </Container>
);
