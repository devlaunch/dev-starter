// Default values
import openColors from './openColors';

const theme = {
  breakpoints: [32, 48, 64, 80],
  space: [0, 4, 8, 16, 32, 64, 128],
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  colors: {
    ...openColors,
  },
  radii: [0, 2, 4],
};

export default theme;
