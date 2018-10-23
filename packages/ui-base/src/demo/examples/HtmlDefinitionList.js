import React from "react";
import { Container } from "@devlaunch/ui-container";

export const HtmlDefinitionList = () => (
  <Container>
    {" "}
    <section>
      <dl>
        <dt>Definition List Title</dt>
        <dd>Definition list division.</dd>
        <dt>Kitchen Sink</dt>
        <dd>
          Used in expressions to describe work in which all conceivable (and
          some inconceivable) sources have been mined. In this case, a bunch of
          markup.
        </dd>
        <dt>aside</dt>
        <dd>Defines content aside from the page content</dd>
        <dt>blockquote</dt>
        <dd>Defines a section that is quoted from another source</dd>
      </dl>
    </section>
  </Container>
);
