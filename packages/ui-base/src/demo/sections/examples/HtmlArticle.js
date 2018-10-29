import React from "react";
import { Container } from "@devlaunch/ui-container";

export const HtmlArticle = () => (
  <Container>
    {" "}
    <section>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <article>
        <p>
          This paragraph is nested inside an article. It contains many
          different, sometimes useful,{" "}
          <a href="https://www.w3schools.com/tags/">HTML5 tags</a>. Of course
          there are classics like <em>emphasis</em>, <strong>strong</strong>,
          and <small>small</small> but there are many others as well. Hover the
          following text for abbreviation tag:{" "}
          <abbr title="abbreviation">abbr</abbr>. Similarly, you can use acronym
          tag like this: <acronym title="For The Win">ftw</acronym>. You can
          define <del>deleted text</del> which often gets replaced with{" "}
          <ins>inserted</ins> text.
        </p>
        <p>
          You can also use <kbd>keyboard text</kbd>, which sometimes is styled
          similarly to the <code>&lt;code&gt;</code> or <samp>samp</samp> tags.
          Even more specifically, there is a tag just for <var>variables</var>.
          Not to be mistaken with blockquotes below, the quote tag lets you
          denote something as <q>quoted text</q>. Lastly don't forget the sub (H
          <sub>2</sub>
          O) and sup (E = MC
          <sup>2</sup>) tags.{" "}
        </p>
      </article>
      <aside>This is an aside.</aside>
      <footer>This is footer for this section</footer>
    </section>{" "}
  </Container>
);
