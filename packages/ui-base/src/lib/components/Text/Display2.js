import styled from "styled-components";
import { Text } from "./Text";
import { themeGet } from "styled-system";
import { theme } from "../../theme/base-theme";

export const Display2 = styled(Text)`
  margin-top: 0;
  margin-bottom: ${themeGet("text.headings.marginBottom", theme.text.headings.marginBottom)};
  font-family: ${themeGet("text.headings.font", theme.text.headings.font)};
  font-weight: ${themeGet("text.display2.fontWeight", theme.text.display2.fontWeight)};
  line-height: ${themeGet("text.display2.lineHeight", theme.text.display2.lineHeight)};
  color: ${themeGet("text.headings.color", theme.text.headings.color)};
  font-size: ${themeGet("text.display2.fontSize", theme.text.display2.fontSize)};
`;

Display2.displayName = "Display2";

Display2.defaultProps = {
  as: "span"
};
