import { colors } from "../colors";
import { utils } from "../settings";

const tooltipInner = {
  colors: {
    default: {
      color: colors.white,
      backgroundColor: colors.black
    }
  },
  padding: {
    default: "0.25rem 0.5rem"
  },
  borderRadius: utils.borderRadius
};

export { tooltipInner };
