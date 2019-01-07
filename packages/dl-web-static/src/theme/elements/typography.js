import { colors } from "../colors";
import { utils } from "../settings";

const link = {
  color: colors.primary.color,
  decoration: "none",
  hover: {
    color: colors.primary.hoverfocus,
    decoration: "underline"
  }
};

const text = {
  lineHeight: utils.lineHeights.copy,
  display4: {
    fontSize: utils.fontSizes[6],
    fontWeight: utils.fontWeights.light,
    lineHeight: utils.lineHeights.title
  },
  display3: {
    fontSize: utils.fontSizes[7],
    fontWeight: utils.fontWeights.light,
    lineHeight: utils.lineHeights.title
  },
  display2: {
    fontSize: utils.fontSizes[8],
    fontWeight: utils.fontWeights.light,
    lineHeight: utils.lineHeights.title
  },
  display1: {
    fontSize: utils.fontSizes[9],
    fontWeight: utils.fontWeights.light,
    lineHeight: utils.lineHeights.title
  },
  h1: { fontSize: utils.fontSizes[5] },
  h2: { fontSize: utils.fontSizes[4] },
  h3: { fontSize: utils.fontSizes[3] },
  h4: { fontSize: utils.fontSizes[2] },
  h5: { fontSize: utils.fontSizes[1] },
  h6: { fontSize: utils.fontSizes[0] },
  headings: {
    font: "inherit",
    color: "inherit",
    lineHeight: utils.lineHeights.title,
    fontWeight: utils.fontWeights.title,
    marginBottom: utils.space[2]
  },
  lead: {
    fontSize: utils.fontSizes[1],
    fontWeight: utils.fontWeights.light,
    marginBottom: utils.space[3]
  },
  small: {
    fontSize: "80%",
    fontWeight: utils.fontWeights.normal
  },
  mark: {
    padding: ".2em",
    color: { bg: colors.bgMark }
  },
  blockquote: {
    fontSize: utils.fontSizes[1],
    marginBottom: utils.space[3],
    small: {
      fontSize: "80%",
      color: "#6c757d"
    }
  },
  paragraph: {
    marginBottom: utils.space[3]
  },
  code: { fontSize: "87.5%", color: "#e83e8c" },
  kdb: {
    py: ".2rem",
    px: ".4rem",
    color: colors.white,
    bg: "#212529",
    nestedFontWeight: utils.fontWeights.bold
  },
  pre: {
    color: "#212529",
    scrollableMaxHeight: "340px"
  }
};

const hr = {
  border: {
    color: colors.light.bordermuted,
    width: utils.borders[1]
  },
  marginY: utils.space[3]
};

const body = {
  color: "#212529",
  bg: "#fff"
};

export { link, text, hr, body };
