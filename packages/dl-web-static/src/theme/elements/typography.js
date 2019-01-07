import { colors } from "../colors";
import { utils } from "../settings";

const link = {
  colors: {
    primary: {
      color: colors.primary.color,
      colorHoverFocus: colors.primary.hoverfocus
    }
  },
  decoration: "none",
  hover: {
    decoration: "underline"
  }
};

const text = {
  lineHeight: {
    default: utils.lineHeights.copy,
    display4: utils.lineHeights.title,
    display3: utils.lineHeights.title,
    display2: utils.lineHeights.title,
    display1: utils.lineHeights.title,
    headings: utils.lineHeights.title
  },
  fontSize: {
    default: utils.fontSizes[1],
    display4: utils.fontSizes[6],
    display3: utils.fontSizes[7],
    display2: utils.fontSizes[8],
    display1: utils.fontSizes[9],
    h1: utils.fontSizes[5],
    h2: utils.fontSizes[4],
    h3: utils.fontSizes[3],
    h4: utils.fontSizes[2],
    h5: utils.fontSizes[1],
    h6: utils.fontSizes[0],
    lead: utils.fontSizes[1],
    small: "80%",
    code: "87.5%",
    blockquote: utils.fontSizes[1]
  },
  fontWeight: {
    default: "400",
    display4: utils.fontWeights.light,
    display3: utils.fontWeights.light,
    display2: utils.fontWeights.light,
    display1: utils.fontWeights.light,
    headings: utils.fontWeights.title,
    lead: utils.fontWeights.light,
    small: utils.fontWeights.normal,
    kdb: utils.fontWeights.bold,
    dt: utils.fontWeights.bold
  },
  margin: {
    default: { bottom: utils.space[2] },
    display4: { bottom: utils.space[2] },
    display3: { bottom: utils.space[2] },
    display2: { bottom: utils.space[2] },
    display1: { bottom: utils.space[2] },
    headings: { bottom: utils.space[2] },
    lead: { bottom: utils.space[3] },
    paragraph: { bottom: utils.space[3] },
    blockquote: { bottom: utils.space[3] },
    label: { bottom: utils.space[2] }
  },
  fontFamily: {
    default: utils.fonts.base,
    display4: utils.fonts.base,
    display3: utils.fonts.base,
    display2: utils.fonts.base,
    display1: utils.fonts.base,
    headings: utils.fonts.base,
    pre: utils.fonts.monospace
  },
  colors: {
    default: {
      color: colors.light.bodytext,
      backgroundColor: colors.light.bg
    },
    display4: { color: colors.light.bodytext },
    display3: { color: colors.light.bodytext },
    display2: { color: colors.light.bodytext },
    display1: { color: colors.light.bodytext },
    headings: { color: colors.light.bodytext },
    mark: {
      backgroundColor: colors.bgMark
    },
    kdb: {
      color: colors.white,
      backgroundColor: colors.dark.bg
    },
    code: {
      color: colors.pink.color
    },
    pre: {
      color: colors.light.bodytext
    },
    caption: {
      color: colors.light.mutedtext
    }
  },
  padding: {
    kdb: {
      top: ".2rem",
      bottom: ".4rem"
    },
    mark: {
      default: ".2em"
    },
    caption: {
      top: "0.75rem",
      bottom: "0.75rem"
    }
  }
};

const hr = {
  colors: {
    default: {
      borderColor: colors.light.bordermuted
    }
  },
  border: {
    default: utils.borders[1]
  },
  margin: {
    top: utils.space[3],
    bottom: utils.space[3]
  }
};

const body = {
  colors: {
    default: {
      color: colors.light.bodytext,
      backgroundColor: colors.light.bg
    }
  },
  fontFamily: {
    default: utils.fonts.base
  },
  fontSize: {
    default: utils.fontSizes[1]
  },
  fontWeight: {
    default: utils.fontWeights.normal
  },
  lineHeight: {
    default: utils.lineHeights.copy
  }
};

export { link, text, hr, body };
