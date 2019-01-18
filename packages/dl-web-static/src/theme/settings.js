const utils = {
  breakpoints: [32, 48, 64],
  space: [0, "0.25rem", "0.5rem", "1rem", "1.5rem", "3rem"],
  fontSizes: [
    "0.875rem",
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
  borderRadius: {
    noRadius: "0",
    pill: "10rem",
    sm: "0.2rem",
    lg: "0.3rem",
    default: "0.25rem"
  },
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536]
};

export { utils };
