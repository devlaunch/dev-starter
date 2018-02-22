// Default values
import openColors from './openColors';

const theme = {
  breakpoints: [32, 48, 64, 80],
  space: [0, 4, 8, 16, 32, 64, 128],
  fonts: {
    sans:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 28, 48, 64, 72, 96],
  fontWeights: {
    thin: 200,
    normal: 400,
    bold: 700,
  },
  colors: {
    ...openColors,
  },
  radii: [0, 2, 4],
};

export default theme;
