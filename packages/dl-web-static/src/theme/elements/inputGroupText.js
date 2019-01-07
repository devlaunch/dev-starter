import { colors } from "../colors";
import { utils } from "../settings";

const inputGroupText = {
  colors: {
    default: {
      color: colors.gray700,
      backgroundColor: colors.gray200,
      borderColor: colors.gray400
    }
  },
  margin: {
    bottom: "0",
    radioCheckboxTop: "0",
    radioCheckboxRight: "0",
    radioCheckboxBottom: "0.4125rem"
  },
  padding: {
    default: "0.375rem 0.75rem"
  },
  fontWeight: {
    default: "400"
  },
  fontSize: {
    sm: utils.fontSizes[0],
    lg: utils.fontSizes[2],
    default: utils.fontSizes[1]
  },
  borderRadius: utils.borderRadius,
  border: {
    default: utils.borders[1]
  }
};

export { inputGroupText };
