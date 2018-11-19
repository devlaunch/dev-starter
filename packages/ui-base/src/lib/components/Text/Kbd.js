import styled from "styled-components";
import { Text } from "./Text";
import { themeGet } from "styled-system";
import { theme } from "../../theme/base-theme";

export const Kbd = styled(Text)`
  font-family: ${themeGet("fonts.monospace", theme.fonts.monospace)};
  padding: ${themeGet("text.kdb.py", theme.text.kdb.py)}
    ${themeGet("text.kdb.px", theme.text.kdb.px)};
  font-size: ${themeGet("text.code.fontSize", theme.text.code.fontSize)};
  color: ${themeGet("text.kdb.color", theme.text.kdb.color)};
  background-color: ${themeGet("text.kdb.bg", theme.text.kdb.bg)};
  border-radius: ${themeGet("borderRadius.sm", theme.borderRadius.sm)};
  & > kbd {
    padding: 0;
    font-size: 100%;
    font-weight: ${themeGet(
      "text.kdb.nestedFontWeight",
      theme.text.kdb.nestedFontWeight
    )};
  }
`;

Kbd.displayName = "Kbd";

Kbd.defaultProps = {
  as: "kbd"
};
