import React from "react";
import { Container } from "@devlaunch/ui-container";

export const HtmlLists = () => (
  <Container>
    {" "}
    <section>
      <ul>
        <li>
          Unordered List item one
          <ul>
            <li>
              Nested list item
              <ul>
                <li>Level 3, item one</li>
                <li>Level 3, item two</li>
                <li>Level 3, item three</li>
                <li>Level 3, item four</li>
              </ul>
            </li>
            <li>List item two</li>
            <li>List item three</li>
            <li>List item four</li>
          </ul>
        </li>
        <li>List item two</li>
        <li>List item three</li>
        <li>List item four</li>
      </ul>
      <hr />
      <ol>
        <li>
          List item one
          <ol>
            <li>
              List item one
              <ol>
                <li>List item one</li>
                <li>List item two</li>
                <li>List item three</li>
                <li>List item four</li>
              </ol>
            </li>
            <li>List item two</li>
            <li>List item three</li>
            <li>List item four</li>
          </ol>
        </li>
        <li>List item two</li>
        <li>List item three</li>
        <li>List item four</li>
      </ol>
    </section>
    ;
  </Container>
);
