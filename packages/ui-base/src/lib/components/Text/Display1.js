import styled from "styled-components";
import { Text } from "./Text";
import { themeGet } from "styled-system";
import { theme } from "../../theme/base-theme";

export const Display1 = styled(Text)`
  margin-top: 0;
  margin-bottom: ${themeGet(
    "text.headings.marginBottom",
    theme.text.headings.marginBottom
  )};
  font-family: ${themeGet("text.headings.font", theme.text.headings.font)};
  font-weight: ${themeGet(
    "text.display1.fontWeight",
    theme.text.display1.fontWeight
  )};
  line-height: ${themeGet(
    "text.display1.lineHeight",
    theme.text.display1.lineHeight
  )};
  color: ${themeGet("text.headings.color", theme.text.headings.color)};
  font-size: ${themeGet(
    "text.display1.fontSize",
    theme.text.display1.fontSize
  )};
`;

Display1.displayName = "Display1";

Display1.defaultProps = {
  as: "span"
};
