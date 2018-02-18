// Default values
import openColors from './openColors';

const theme = {
  breakpoints: [32, 48, 64, 80],
  space: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  weights: [400, 700],
  colors: {
    ...openColors,
  },
  radius: 4,
  font:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  monospace: '"SF Mono", "Roboto Mono", Menlo, monospace',
};

export default theme;
