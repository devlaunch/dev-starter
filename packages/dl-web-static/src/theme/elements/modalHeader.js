import { colors } from "../colors";
import { utils } from "../settings";

const modalHeader = {
  colors: {
    default: {
      borderColor: colors.borderCard
    }
  },
  padding: {
    default: "1rem"
  },
  border: {
    default: utils.borders[1]
  },
  borderRadius: utils.borderRadius
};

export { modalHeader };
