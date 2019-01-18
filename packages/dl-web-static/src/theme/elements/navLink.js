import { colors as thcolors } from "../colors";
import { utils } from "../settings";

const navLink = {
  colors: {
    default: {
      colorDisabled: thcolors.primary.disabledtext,
      colorDisabledHoverFocus: thcolors.primary.disabledtext,
      colorTabsActive: thcolors.light.menutext,
      colorTabsActiveHoverFocus: thcolors.light.disabledtext,
      colorPillsActive: thcolors.white,
      colorPillsActiveHoverFocus: thcolors.white,
      color: thcolors.primary.color,
      colorHoverFocus: thcolors.primary.hoverfocus,
      backgroundColorPillsActive: thcolors.primary.color,
      borderColorTabsActive: `${thcolors.light.border} ${
        thcolors.light.border
      } ${thcolors.white}`,
      borderColorTabsHoverFocus: `${thcolors.light.border} ${
        thcolors.light.border
      } ${thcolors.light.bordermuted}`,
      borderColorTabsDisabled: "transparent",
      borderColorPillsActive: thcolors.primary.color,
      borderColor: "transparent"
    },
    light: {
      colorDisabled: thcolors.primary.disabledtext,
      colorDisabledHoverFocus: thcolors.primary.disabledtext,
      colorTabsActive: thcolors.light.menutext,
      colorTabsActiveHoverFocus: thcolors.light.disabledtext,
      colorPillsActive: thcolors.white,
      colorPillsActiveHoverFocus: thcolors.white,
      color: thcolors.primary.color,
      colorHoverFocus: thcolors.primary.hoverfocus,
      backgroundColorPillsActive: thcolors.primary.color,
      borderColorTabsActive: `${thcolors.light.border} ${
        thcolors.light.border
      } ${thcolors.white}`,
      borderColorTabsHoverFocus: `${thcolors.light.border} ${
        thcolors.light.border
      } ${thcolors.light.bordermuted}`,
      borderColorTabsDisabled: "transparent",
      borderColorPillsActive: thcolors.primary.color,
      borderColor: "transparent"
    },
    dark: {
      colorDisabled: thcolors.primary.disabledtext,
      colorDisabledHoverFocus: thcolors.primary.disabledtext,
      colorTabsActive: thcolors.light.menutext,
      colorTabsActiveHoverFocus: thcolors.light.disabledtext,
      colorPillsActive: thcolors.white,
      colorPillsActiveHoverFocus: thcolors.white,
      color: thcolors.primary.color,
      colorHoverFocus: thcolors.primary.hoverfocus,
      backgroundColorPillsActive: thcolors.primary.color,
      borderColorTabsActive: `${thcolors.light.border} ${
        thcolors.light.border
      } ${thcolors.white}`,
      borderColorTabsHoverFocus: `${thcolors.light.border} ${
        thcolors.light.border
      } ${thcolors.light.bordermuted}`,
      borderColorTabsDisabled: "transparent",
      borderColorPillsActive: thcolors.primary.color,
      borderColor: "transparent"
    }
  },
  padding: {
    default: "0.5rem"
  },
  borderRadius: utils.borderRadius,
  border: {
    default: utils.borders[1]
  }
};

export { navLink };
