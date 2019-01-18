import { colors as thcolors } from "../colors";
import { utils } from "../settings";

const navbarLink = {
  colors: {
    dark: {
      colorDisabled: thcolors.dark.disabledtext,
      colorDisabledHoverFocus: thcolors.dark.disabledtext,
      colorActive: thcolors.dark.bodytext,
      colorActiveHoverFocus: thcolors.dark.bodytext,
      color: thcolors.dark.mutedtext,
      colorHoverFocus: thcolors.dark.mutedtext
    },
    light: {
      colorDisabled: thcolors.light.disabledtext,
      colorDisabledHoverFocus: thcolors.light.disabledtext,
      colorActive: thcolors.light.bodytext,
      colorActiveHoverFocus: thcolors.light.bodytext,
      color: thcolors.light.mutedtext,
      colorHoverFocus: thcolors.light.mutedtext
    },
    default: {
      colorDisabled: thcolors.light.disabledtext,
      colorDisabledHoverFocus: thcolors.light.disabledtext,
      colorActive: thcolors.light.bodytext,
      colorActiveHoverFocus: thcolors.light.bodytext,
      color: thcolors.light.mutedtext,
      colorHoverFocus: thcolors.light.mutedtext
    }
  },
  padding: {
    brandTop: "0.3125rem",
    brandBottom: "0.3125rem"
  },
  fontSize: {
    sm: utils.fontSizes[0],
    lg: utils.fontSizes[2],
    default: utils.fontSizes[1]
  }
};

export { navbarLink };
