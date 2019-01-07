import { colors } from "../colors";
import { utils } from "../settings";

const card = {
  colors: {
    default: {
      backgroundColor: colors.white,
      borderColor: colors.borderCard
    }
  },
  borderRadius: utils.borderRadius,
  border: {
    default: utils.borders[1]
  }
};

export { card };
