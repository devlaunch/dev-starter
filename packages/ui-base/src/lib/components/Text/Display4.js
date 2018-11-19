import styled from "styled-components";
import { Text } from "./Text";
import { themeGet } from "styled-system";
import { theme } from "../../theme/base-theme";

export const Display4 = styled(Text)`
  margin-top: 0;
  margin-bottom: ${themeGet("text.headings.marginBottom", theme.text.headings.marginBottom)};
  font-family: ${themeGet("text.headings.font", theme.text.headings.font)};
  font-weight: ${themeGet("text.display4.fontWeight", theme.text.display4.fontWeight)};
  line-height: ${themeGet("text.display4.lineHeight", theme.text.display4.lineHeight)};
  color: ${themeGet("text.headings.color", theme.text.headings.color)};
  font-size: ${themeGet("text.display4.fontSize", theme.text.display4.fontSize)};
`;

Display4.displayName = "Display4";

Display4.defaultProps = {
  as: "span"
};
