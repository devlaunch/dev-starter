// stylelint-disable at-rule-no-vendor-prefix, declaration-no-important, selector-no-qualifying-type, property-no-vendor-prefix

// Reboot
//
// Normalization of HTML elements, manually forked from Normalize.css to remove
// styles targeting irrelevant browsers while applying new styles.
//
// Normalize is licensed MIT. https://github.com/necolas/normalize.css

import { createGlobalStyle } from "styled-components";
import { themeGet } from "styled-system";
import { theme } from "../theme/base-theme";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: ${themeGet("black", theme.black)};
  }

  @-ms-viewport {
    width: device-width;
  }

  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }

  body {
    margin: 0;
    font-family: ${themeGet("font_family_base", theme.font_family_base)};
    font-size: ${themeGet("font_size_base", theme.font_size_base)};
    font-weight: ${themeGet("font_weight_base", theme.font_weight_base)};
    line-height: ${themeGet("line_height_base", theme.line_height_base)};
    color: ${themeGet("body_color", theme.body_color)};
    text-align: left;
    background-color: ${themeGet("body_bg", theme.body_bg)};
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
    margin-bottom: ${themeGet(
      "headings_margin_bottom",
      theme.headings_margin_bottom
    )};
  }

  p {
    margin-top: 0;
    margin-bottom: ${themeGet(
      "paragraph_margin_bottom",
      theme.paragraph_margin_bottom
    )};
  }

  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
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
    font-weight: ${themeGet("dt_font_weight", theme.dt_font_weight)};
  }

  dd {
    margin-bottom: .5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  dfn {
    font-style: italic;
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

  sub { bottom: -.25em; }
  sup { top: -.5em; }

  a {
    color: ${themeGet("link_color", theme.link_color)};
    text-decoration: ${themeGet("link_decoration", theme.link_decoration)};
    background-color: transparent;

    &:hover {
      color:${themeGet("link_hover_color", theme.link_hover_color)};
      text-decoration: ${themeGet(
        "link_hover_decoration",
        theme.link_hover_decoration
      )};
    }
  }

  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;

    &:hover,
    &:focus {
      color: inherit;
      text-decoration: none;
    }

    &:focus {
      outline: 0;
    }
  }

  pre,
  code,
  kbd,
  samp {
    font-family: ${themeGet(
      "font_family_monospace",
      theme.font_family_monospace
    )};
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
    padding-top: ${themeGet("table_cell_padding", theme.table_cell_padding)};
    padding-bottom:  ${themeGet(
      "table_cell_padding",
      theme.table_cell_padding
    )};
    color:  ${themeGet("table_caption_color", theme.table_caption_color)};
    text-align: left;
    caption-side: bottom;
  }

  th {
    text-align: inherit;
  }

  label {
    display: inline-block;
    margin-bottom: ${themeGet(
      "label_margin_bottom",
      theme.label_margin_bottom
    )};
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
  html [type="button"],
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
    -webkit-appearance: none;
  }

  [type="search"]::-webkit-search-cancel-button,
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

  [hidden] {
    display: none !important;
  }
`;
