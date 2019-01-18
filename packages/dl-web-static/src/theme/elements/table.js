import { colors } from "../colors";
import { utils } from "../settings";

const table = {
  colors: {
    light: {
      borderedBorderColor: colors.gray300,
      stripedBackgroundColor: colors.tableStripedBackgroundColor,
      backgroundColorHoverFocus: colors.tableBackgroundColorHoverFocus,
      darkColor: colors.white,
      darkBackgroundColor: colors.gray900,
      darkBorderColor: colors.tableDarkBorderColor,
      theadDarkColor: colors.white,
      theadDarkBackgroundColor: colors.gray900,
      theadDarkBorderColor: colors.tableDarkBorderColor,
      stripedDarkBackgroundColor: colors.tableDarkStripedBackgroundColor,
      darkBackgroundColorHoverFocus:
        colors.tableDarkStripedBackgroundColorHoverFocus,
      theadLightColor: colors.gray700,
      theadLightBackgroundColor: colors.gray200,
      theadLightBorderColor: colors.gray300,
      borderColor: colors.gray300,
      backgroundColor: colors.white
    },
    dark: {
      borderedBorderColor: colors.gray300,
      stripedBackgroundColor: colors.tableStripedBackgroundColor,
      backgroundColorHoverFocus: colors.tableBackgroundColorHoverFocus,
      darkColor: colors.white,
      darkBackgroundColor: colors.gray900,
      darkBorderColor: colors.tableDarkBorderColor,
      theadDarkColor: colors.white,
      theadDarkBackgroundColor: colors.gray900,
      theadDarkBorderColor: colors.tableDarkBorderColor,
      stripedDarkBackgroundColor: colors.tableDarkStripedBackgroundColor,
      darkBackgroundColorHoverFocus:
        colors.tableDarkStripedBackgroundColorHoverFocus,
      theadLightColor: colors.gray700,
      theadLightBackgroundColor: colors.gray200,
      theadLightBorderColor: colors.gray300,
      borderColor: colors.gray300,
      backgroundColor: colors.white
    },
    default: {
      borderedBorderColor: colors.gray300,
      stripedBackgroundColor: colors.tableStripedBackgroundColor,
      backgroundColorHoverFocus: colors.tableBackgroundColorHoverFocus,
      darkColor: colors.white,
      darkBackgroundColor: colors.gray900,
      darkBorderColor: colors.tableDarkBorderColor,
      theadDarkColor: colors.white,
      theadDarkBackgroundColor: colors.gray900,
      theadDarkBorderColor: colors.tableDarkBorderColor,
      stripedDarkBackgroundColor: colors.tableDarkStripedBackgroundColor,
      darkBackgroundColorHoverFocus:
        colors.tableDarkStripedBackgroundColorHoverFocus,
      theadLightColor: colors.gray700,
      theadLightBackgroundColor: colors.gray200,
      theadLightBorderColor: colors.gray300,
      borderColor: colors.gray300,
      backgroundColor: colors.white
    },
    padding: {
      sm: "0.3rem"
    }
  },
  border: {
    default: utils.borders[1],
    bottomTop: utils.borders[2]
  }
};

export { table };
