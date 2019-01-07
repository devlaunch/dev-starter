import { createGlobalStyle } from "styled-components";
import { themeGet } from "@devlaunch/ui-config";

const BootstrapBaseCss = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }   

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }

  body {
    margin: 0;
    font-family: ${themeGet("body.fontFamily.default")};
    font-size: ${themeGet("body.fontSize.default")};
    font-weight: ${themeGet("body.fontWeight.default")};
    line-height: ${themeGet("body.lineHeight.default")};
    color: ${themeGet("body.colors.default.color")};
    text-align: left;
    background-color: ${themeGet("body.colors.default.backgroundColor")};
  }
  
  [tabindex="-1"]:focus {
    outline: 0 !important;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: ${themeGet("text.margin.default.bottom")};
  }
  
  p {
    margin-top: 0;
    margin-bottom: ${themeGet("text.margin.paragraph.bottom")};
  }
  
  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
    text-decoration-skip-ink: none;
  }
  
  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }
  
  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }
  
  dt {
    font-weight: ${themeGet("text.fontWeight.dt")};
  }
  
  dd {
    margin-bottom: .5rem;
    margin-left: 0;
  }
  
  blockquote {
    margin: 0 0 1rem;
  }
  
  b,
  strong {
    font-weight: bolder;
  }
  
  small {
    font-size: 80%;
  }
  
  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }
  
  sub {
    bottom: -.25em;
  }
  
  sup {
    top: -.5em;
  }
  
  a {
    color: ${themeGet("link.colors.primary.color")};
    text-decoration: ${themeGet("link.decoration")};
    background-color: transparent;
  }
  
  a:hover {
    color: ${themeGet("link.colors.primary.colorHoverFocus")};
    text-decoration: ${themeGet("link.hover.decoration")};
  }
  
  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
  }
  
  a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
    color: inherit;
    text-decoration: none;
  }
  
  a:not([href]):not([tabindex]):focus {
    outline: 0;
  }
  
  pre,
  code,
  kbd,
  samp {
    font-family: ${themeGet("text.fontFamily.pre")};
    font-size: 1em;
  }
  
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    -ms-overflow-style: scrollbar;
  }
  
  figure {
    margin: 0 0 1rem;
  }
  
  img {
    vertical-align: middle;
    border-style: none;
  }
  
  svg {
    overflow: hidden;
    vertical-align: middle;
  }
  
  table {
    border-collapse: collapse;
  }
  
  caption {
    padding-top: ${themeGet("text.padding.caption.top")};
    padding-bottom: ${themeGet("text.padding.caption.top")};
    color: ${themeGet("text.colors.caption.color")};
    text-align: left;
    caption-side: bottom;
  }
  
  th {
    text-align: inherit;
  }
  
  label {
    display: inline-block;
    margin-bottom: ${themeGet("text.margin.label.bottom")};
  }
  
  button {
    border-radius: 0;
  }
  
  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }
  
  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
  
  button,
  input {
    overflow: visible;
  }
  
  button,
  select {
    text-transform: none;
  }
  
  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
  
  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
  
  input[type="radio"],
  input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }
  
  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    -webkit-appearance: listbox;
  }
  
  textarea {
    overflow: auto;
    resize: vertical;
  }
  
  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }
  
  legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: .5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
  }
  
  progress {
    vertical-align: baseline;
  }
  
  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }
  
  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }
  
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  
  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }
  
  output {
    display: inline-block;
  }
  
  summary {
    display: list-item;
    cursor: pointer;
  }
  
  template {
    display: none;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${themeGet("text.margin.headings.bottom")};
    font-family: ${themeGet("text.fontFamily.headings")};
    font-weight: ${themeGet("text.fontWeight.headings")};
    line-height: ${themeGet("text.lineHeight.headings")};
    color: ${themeGet("text.colors.headings.color")};
  }
  
  h1 {
    font-size: ${themeGet("text.fontSize.h1")};
  }
  
  h2 {
    font-size: ${themeGet("text.fontSize.h2")};
  }
  
  h3 {
    font-size: ${themeGet("text.fontSize.h3")};
  }
  
  h4 {
    font-size: ${themeGet("text.fontSize.h4")};
  }
  
  h5 {
    font-size: ${themeGet("text.fontSize.h5")};
  }
  
  h6 {
    font-size: ${themeGet("text.fontSize.h6")};
  }
  
  hr {
    margin-top: ${themeGet("hr.margin.top")};
    margin-bottom: ${themeGet("hr.margin.bottom")};
    border: 0;
    border-top: 1px solid ${themeGet("hr.colors.default.borderColor")};
  }
  
  small {
    font-size: ${themeGet("text.fontSize.small")};
    font-weight: ${themeGet("text.fontWeight.small")};
  }
  
  mark {
    padding: ${themeGet("text.padding.mark.default")};
    background-color: ${themeGet("text.colors.mark.backgroundColor")};
  }
`;

export { BootstrapBaseCss };
