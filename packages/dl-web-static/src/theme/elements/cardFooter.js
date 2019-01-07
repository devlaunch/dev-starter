import { colors } from "../colors";
import { utils } from "../settings";

const cardFooter = {
  colors: {
    default: {
      background: colors.backgroundCardFooter,
      borderTop: colors.borderCard
    }
  },
  padding: {
    default: "0.75rem 1.25rem"
  },
  borderRadius: {
    noRadius: utils.borderRadius.noRadius,
    default: "0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)"
  },
  border: {
    default: utils.borders[1]
  }
};

export { cardFooter };
