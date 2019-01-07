import { colors } from "../colors";
import { utils } from "../settings";

const button = {
  colors: {
    primary: {
      color: colors.white,
      colorOutline: colors.blue,
      colorOutlineHover: colors.white,
      backgroundColor: colors.buttonPrimaryBackgroundColor,
      backgroundColorDisabled: colors.blue,
      backgroundColorHoverFocus: colors.buttonPrimaryHoverFocusBackgroundColor,
      backgroundColorActive: colors.blueHoverFocus,
      borderColor: colors.blue,
      borderColorDisabled: colors.blue,
      borderColorActive: colors.buttonPrimaryActiveBorderColor,
      borderColorHoverFocus: colors.blueHoverFocus,
      boxShadow: colors.blueBoxShadow
    },
    secondary: {
      color: colors.white,
      colorOutline: colors.gray,
      colorOutlineHover: colors.white,
      backgroundColor: colors.buttonSecondaryBackgroundColor,
      backgroundColorDisabled: colors.gray,
      backgroundColorHoverFocus: colors.buttonSecondaryHoverFocusBackgroundColor,
      backgroundColorActive: colors.grayHoverFocus,
      borderColor: colors.gray,
      borderColorDisabled: colors.gray,
      borderColorActive: colors.buttonSecondaryActiveBorderColor,
      borderColorHoverFocus: colors.grayHoverFocus,
      boxShadow: colors.grayBoxShadow
    },
    success: {
      color: colors.white,
      colorOutline: colors.green,
      colorOutlineHover: colors.white,
      backgroundColor: colors.buttonSuccessBackgroundColor,
      backgroundColorDisabled: colors.green,
      backgroundColorHoverFocus: colors.buttonSuccessHoverFocusBackgroundColor,
      backgroundColorActive: colors.greenHoverFocus,
      borderColor: colors.green,
      borderColorDisabled: colors.green,
      borderColorActive: colors.buttonSuccessActiveBorderColor,
      borderColorHoverFocus: colors.greenHoverFocus,
      boxShadow: colors.greenBoxShadow
    },
    danger: {
      color: colors.white,
      colorOutline: colors.red,
      colorOutlineHover: colors.white,
      backgroundColor: colors.buttonDangerBackgroundColor,
      backgroundColorDisabled: colors.red,
      backgroundColorHoverFocus: colors.buttonDangerHoverFocusBackgroundColor,
      backgroundColorActive: colors.redHoverFocus,
      borderColor: colors.red,
      borderColorDisabled: colors.red,
      borderColorActive: colors.buttonDangerActiveBorderColor,
      borderColorHoverFocus: colors.redHoverFocus,
      boxShadow: colors.redBoxShadow
    },
    warning: {
      color: colors.gray900,
      colorOutline: colors.yellow,
      colorOutlineHover: colors.gray900,
      backgroundColor: colors.buttonWarningBackgroundColor,
      backgroundColorDisabled: colors.yellow,
      backgroundColorHoverFocus: colors.buttonWarningHoverFocusBackgroundColor,
      backgroundColorActive: colors.yellowHoverFocus,
      borderColor: colors.yellow,
      borderColorDisabled: colors.yellow,
      borderColorActive: colors.buttonWarningActiveBorderColor,
      borderColorHoverFocus: colors.yellowHoverFocus,
      boxShadow: colors.yellowBoxShadow
    },
    info: {
      color: colors.white,
      colorOutline: colors.cyan,
      colorOutlineHover: colors.white,
      backgroundColor: colors.buttonInfoBackgroundColor,
      backgroundColorDisabled: colors.cyan,
      backgroundColorHoverFocus: colors.buttonInfoHoverFocusBackgroundColor,
      backgroundColorActive: colors.cyanHoverFocus,
      borderColor: colors.cyan,
      borderColorDisabled: colors.cyan,
      borderColorActive: colors.buttonInfoActiveBorderColor,
      borderColorHoverFocus: colors.cyanHoverFocus,
      boxShadow: colors.cyanBoxShadow
    },
    light: {
      color: colors.gray900,
      colorOutline: colors.gray100,
      colorOutlineHover: colors.gray900,
      backgroundColor: colors.buttonLightBackgroundColor,
      backgroundColorDisabled: colors.gray100,
      backgroundColorHoverFocus: colors.buttonLightHoverFocusBackgroundColor,
      backgroundColorActive: colors.gray100HoverFocus,
      borderColor: colors.gray100,
      borderColorDisabled: colors.gray100,
      borderColorActive: colors.buttonLightActiveBorderColor,
      borderColorHoverFocus: colors.gray100HoverFocus,
      boxShadow: colors.gray100BoxShadow,
      toggle: {
        color: colors.navbarLightColor,
        borderColor: colors.navbarLightBorderColor,
        colorHoverFous: colors.navbarLightColor,
        borderColorHoverFous: colors.navbarLightBorderColor
      }
    },
    dark: {
      color: colors.white,
      colorOutline: colors.gray800,
      colorOutlineHover: colors.white,
      backgroundColor: colors.buttonDarkBackgroundColor,
      backgroundColorDisabled: colors.gray800,
      backgroundColorHoverFocus: colors.buttonDarkHoverFocusBackgroundColor,
      backgroundColorActive: colors.gray800HoverFocus,
      borderColor: colors.gray800,
      borderColorDisabled: colors.gray800,
      borderColorActive: colors.buttonDarkActiveBorderColor,
      borderColorHoverFocus: colors.gray800HoverFocus,
      boxShadow: colors.gray800BoxShadow,
      toggle: {
        color: colors.navbarDarkColor,
        borderColor: colors.navbarDarkBorderColor,
        colorHoverFous: colors.navbarDarkColor,
        borderColorHoverFous: colors.navbarDarkBorderColor
      }
    },
    default: {
      color: colors.white,
      colorOutline: colors.gray,
      colorOutlineHover: colors.white,
      backgroundColor: colors.buttonSecondaryBackgroundColor,
      backgroundColorDisabled: colors.gray,
      backgroundColorHoverFocus: colors.buttonSecondaryHoverFocusBackgroundColor,
      backgroundColorActive: colors.grayHoverFocus,
      borderColor: colors.gray,
      borderColorDisabled: colors.gray,
      borderColorActive: colors.buttonSecondaryActiveBorderColor,
      borderColorHoverFocus: colors.grayHoverFocus,
      boxShadow: colors.grayBoxShadow
    }
  },
  margin: {
    blockTop: "0.5rem",
    dropDownToggleLeft: "0255rem"
  },
  padding: {
    sm: "0.25rem 0.5rem",
    lg: "0.5rem 1rem",
    default: "0.375rem 0.75rem",
    splitSmRight: "0.375rem",
    splitSmLeft: "0.375rem",
    splitLgRight: "0.75rem",
    splitLgLeft: "0.75rem",
    splitDefaultRight: "0.5625rem",
    splitDefaultLeft: "0.5625rem"
  },
  fontSize: {
    sm: utils.fontSizes[0],
    lg: utils.fontSizes[2],
    default: utils.fontSizes[1],
    toggle: utils.fontSizes[2]
  },
  border: {
    default: utils.borders[1]
  },
  borderRadius: utils.borderRadius
};

export { button };
