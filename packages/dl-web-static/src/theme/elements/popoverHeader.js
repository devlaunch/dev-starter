import { colors } from "../colors";
import { utils } from "../settings";

const popoverHeader = {
  colors: {
    default: {
      backgrondColor: colors.popoverHeaderBackgroundColor,
      borderBottomColor: colors.popoverHeaderBorderColor
    }
  },
  padding: {
    default: "0.5rem 0.75rem"
  },
  margin: {
    bottom: "0",
    top: "0",
    beforeLeft: "-0.5rem"
  },
  border: {
    default: utils.borders[1]
  },
  fontSize: {
    sm: utils.fontSizes[0],
    lg: utils.fontSizes[2],
    default: utils.fontSizes[1]
  }
};

export { popoverHeader };
