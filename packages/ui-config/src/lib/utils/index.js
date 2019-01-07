import { boxShadow } from "./boxShadow";
import { colors } from "./colors";
import { margin } from "./margin";
import { padding } from "./padding";
import { border } from "./border";
import { borderRadius } from "./borderRadius";
import { fontWeight } from "./fontWeight";
import { screenSize } from "./screenSize";
import { fontSize } from "./fontSize";
import { fontFamily } from "./fontFamily";
import { width } from "./width";
import { height } from "./height";

const get = (obj, ...paths) =>
  paths
    .join(".")
    .split(".")
    .reduce((a, b) => (a && a[b] ? a[b] : null), obj);

export const themeGet = (paths, fallback) => props => get(props.theme, paths) || fallback;

export {
  boxShadow,
  margin,
  padding,
  colors,
  border,
  borderRadius,
  fontWeight,
  fontSize,
  fontFamily,
  screenSize,
  width,
  height
};
