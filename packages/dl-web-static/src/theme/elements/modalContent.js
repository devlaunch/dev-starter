import { colors } from "../colors";
import { utils } from "../settings";

const modalContent = {
  colors: {
    default: {
      backgroundColor: colors.white,
      borderColor: colors.modalBorder
    }
  },
  borderRadius: utils.borderRadius,
  border: {
    default: utils.borders[1]
  }
};

export { modalContent };
