import { utils } from "../settings";

const inputGroup = {
  borderRadius: utils.borderRadius,
  fontSize: {
    sm: utils.fontSizes[0],
    lg: utils.fontSizes[2],
    default: utils.fontSizes[1]
  },
  padding: {
    leftLg: "0",
    rightLg: "0",
    lg: "0.5rem 1rem",
    leftSm: "0",
    rightSm: "0",
    sm: "0.25rem 0.5rem"
  },
  margin: {
    bottom: "0"
  }
};

export { inputGroup };
