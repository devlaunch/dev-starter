import { colors } from "../colors";
import { utils } from "../settings";

const nav = {
  colors: {
    default: {
      borderColorTabs: colors.gray300
    }
  },
  padding: {
    collapseNotHiddenARight: "0.5rem",
    collapseNotHiddenALeft: "0.5rem",
    left: "0"
  },
  margin: {
    bottom: "0"
  },
  border: {
    default: utils.borders[1]
  }
};

export { nav };
