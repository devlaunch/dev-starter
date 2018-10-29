import React from "react";
import { GlobalStyle } from "lib";
import { HtmlHeadings } from "./examples/HtmlHeadings.js";
import { HtmlArticle } from "./examples/HtmlArticle.js";
import { HtmlBlockquote } from "./examples/HtmlBlockquote.js";
import { HtmlTables } from "./examples/HtmlTables.js";
import { HtmlDefinitionList } from "./examples/HtmlDefinitionList.js";
import { HtmlLists } from "./examples/HtmlLists.js";
import { HtmlAddress } from "./examples/HtmlAddress.js";
import { HtmlPre } from "./examples/HtmlPre.js";
import { HtmlFigure } from "./examples/HtmlFigure.js";
import { HtmlForm } from "./examples/HtmlForm.js";
import { Container } from "@devlaunch/ui-container";

export const HtmlExamples = () => (
  <div>
    {" "}
    <GlobalStyle />
    <Container>
      {" "}
      <main>
        <HtmlHeadings />
        <hr />
        <HtmlArticle />
        <hr />
        <HtmlBlockquote />
        <hr />
        <HtmlTables />
        <hr />
        <HtmlDefinitionList />
        <hr />
        <HtmlLists />
        <hr />
        <HtmlAddress />
        <hr />
        <HtmlPre />
        <hr />
        <HtmlFigure />
        <hr />
        <HtmlForm />
      </main>
    </Container>
  </div>
);
