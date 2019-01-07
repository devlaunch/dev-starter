import { colors } from "../colors";
import { utils } from "../settings";

const dropdownMenu = {
  colors: {
    default: {
      color: colors.gray900,
      backgroundColor: colors.white,
      borderColor: colors.gray900BoxShadow
    }
  },
  fontSize: {
    default: "1rem"
  },
  padding: {
    default: "0.5rem 0"
  },
  margin: {
    default: "0.125rem 0 0"
  },
  borderRadius: utils.borderRadius,
  border: {
    default: utils.borders[1]
  }
};

export { dropdownMenu };
