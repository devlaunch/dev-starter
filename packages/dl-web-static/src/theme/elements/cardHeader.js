import { colors } from "../colors";
import { utils } from "../settings";

const cardHeader = {
  colors: {
    default: {
      background: colors.backgroundCard,
      borderBottom: colors.borderCard
    }
  },
  padding: {
    default: "0.75rem 1.25rem"
  },
  borderRadius: {
    noRadius: utils.borderRadius.noRadius,
    topLeftRight: "calc(0.25rem - 1px)"
  },
  border: {
    default: utils.borders[1]
  }
};

export { cardHeader };
