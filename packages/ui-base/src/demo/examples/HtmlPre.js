import React from "react";
import { Container } from "@devlaunch/ui-container";

export const HtmlPre = () => (
  <Container>
    {" "}
    <section>
      <pre>{`
        pre {
          display: block;
          padding: 7px;
          background-color: #F5F5F5;
          border: 1px solid #E1E1E8;
          border-radius: 3px;
          white-space: pre-wrap;
          word-break: break-all;
          font-family: Menlo, Monaco;
          line-height: 160%;
        }
      `}</pre>
    </section>
  </Container>
);
