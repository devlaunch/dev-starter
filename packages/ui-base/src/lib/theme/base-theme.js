const DEFAULTS = {
  breakpoints: [32, 48, 64],
  space: [0, "0.25rem", "0.5rem", "1rem", "1.5rem", "3rem"],
  fontSizes: [
    "1rem",
    "1.25rem",
    "1.5rem",
    "1.75rem",
    "2rem",
    "2.5rem",
    "3.5rem",
    "4.5rem",
    "5.5rem",
    "6rem"
  ],
  fontWeights: {
    lighter: "lighter",
    light: "300",
    normal: "400",
    title: "500",
    bold: "700",
    bolder: "bolder"
  },
  lineHeights: {
    solid: 1,
    title: 1.2,
    copy: 1.5
  },
  letterSpacings: {
    normal: "normal",
    tracked: "0.1em",
    tight: "-0.05em",
    mega: "0.25em"
  },
  fonts: {
    serif: "athelas, georgia, times, serif",
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
    base:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    monospace:
      'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  borders: [
    0,
    "1px solid",
    "2px solid",
    "4px solid",
    "8px solid",
    "16px solid",
    "32px solid"
  ],
  radii: {
    normal: "0.25rem",
    lg: "0.3rem",
    sm: "0.2rem"
  },
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536]
};

export const theme = {
  // colors
  black: "rgba(0, 0, 0, 0)",

  // fonts
  fonts: DEFAULTS.fonts,
  fontSize: DEFAULTS.fontSizes[0],
  fontWeight: DEFAULTS.fontWeights.normal,

  // lineheights
  lineHeight: DEFAULTS.lineHeights.copy,

  // borders
  borderRadius: DEFAULTS.radii,
  borders: DEFAULTS.borders,

  // body
  body: {
    color: "#212529",
    bg: "#fff"
  },

  // hr
  hr: {
    border: {
      color: "rgba(0, 0, 0, 0.1)",
      width: DEFAULTS.borders[1]
    },
    marginY: DEFAULTS.space[3]
  },

  // text
  text: {
    lineHeight: DEFAULTS.lineHeights.copy,
    display4: {
      fontSize: DEFAULTS.fontSizes[9],
      fontWeight: DEFAULTS.fontWeights.light,
      lineHeight: DEFAULTS.lineHeights.title
    },
    display3: {
      fontSize: DEFAULTS.fontSizes[8],
      fontWeight: DEFAULTS.fontWeights.light,
      lineHeight: DEFAULTS.lineHeights.title
    },
    display2: {
      fontSize: DEFAULTS.fontSizes[7],
      fontWeight: DEFAULTS.fontWeights.light,
      lineHeight: DEFAULTS.lineHeights.title
    },
    display1: {
      fontSize: DEFAULTS.fontSizes[6],
      fontWeight: DEFAULTS.fontWeights.light,
      lineHeight: DEFAULTS.lineHeights.title
    },
    h1: { fontSize: DEFAULTS.fontSizes[5] },
    h2: { fontSize: DEFAULTS.fontSizes[4] },
    h3: { fontSize: DEFAULTS.fontSizes[3] },
    h4: { fontSize: DEFAULTS.fontSizes[2] },
    h5: { fontSize: DEFAULTS.fontSizes[1] },
    h6: { fontSize: DEFAULTS.fontSizes[0] },
    headings: {
      font: "inherit",
      color: "inherit",
      lineHeight: DEFAULTS.lineHeights.title,
      fontWeight: DEFAULTS.fontWeights.title,
      marginBottom: DEFAULTS.space[2]
    },
    lead: {
      fontSize: DEFAULTS.fontSizes[1],
      fontWeight: DEFAULTS.fontWeights.light,
      marginBottom: DEFAULTS.space[3]
    },
    small: {
      fontSize: "80%",
      fontWeight: DEFAULTS.fontWeights.normal
    },
    mark: {
      padding: ".2em",
      color: { bg: "#fcf8e3" }
    },
    blockquote: {
      fontSize: DEFAULTS.fontSizes[1],
      marginBottom: DEFAULTS.space[3],
      small: {
        fontSize: "80%",
        color: "#6c757d"
      }
    },
    paragraph: {
      marginBottom: DEFAULTS.space[3]
    },
    code: { fontSize: "87.5%", color: "#e83e8c" },
    kdb: {
      py: ".2rem",
      px: ".4rem",
      color: "#fff",
      bg: "#212529",
      nestedFontWeight: DEFAULTS.fontWeights.bold
    },
    pre: {
      color: "#212529",
      scrollableMaxHeight: "340px"
    }
  },

  //list
  dt_font_weight: "700",

  // link
  link: {
    color: "#007bff",
    decoration: "none",
    hover: {
      color: "#0056b3",
      decoration: "underline"
    }
  },

  // label
  label_margin_bottom: "0.5rem",

  //table
  table_cell_padding: "0.75rem",
  table_caption_color: "#6c757d"
};
