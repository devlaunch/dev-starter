import React from "react";
import { Container } from "@devlaunch/ui-container";

export const HtmlBlockquote = () => (
  <Container>
    <section>
      <blockquote>
        <p>
          Blockquote: I quickly explained that many big jobs involve few hazards
        </p>
      </blockquote>
      <blockquote>
        <p>
          This is a mult-line blockquote with a cite reference. People think
          focus means saying yes to the thing you’ve got to focus on. But that’s
          not what it means at all. It means saying no to the hundred other good
          ideas that there are. You have to pick carefully. I’m actually as
          proud of the things we haven’tdone as the things I have done.
          Innovation is saying no to 1,000 things.
          <cite>Steve Jobs – Apple Worldwide Developers’ Conference, 1997</cite>
        </p>
      </blockquote>
    </section>
  </Container>
);
