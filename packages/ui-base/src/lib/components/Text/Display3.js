import styled from "styled-components";
import { Text } from "./Text";
import { themeGet } from "styled-system";
import { theme } from "../../theme/base-theme";

export const Display3 = styled(Text)`
  margin-top: 0;
  margin-bottom: ${themeGet(
    "text.headings.marginBottom",
    theme.text.headings.marginBottom
  )};
  font-family: ${themeGet("text.headings.font", theme.text.headings.font)};
  font-weight: ${themeGet(
    "text.display3.fontWeight",
    theme.text.display3.fontWeight
  )};
  line-height: ${themeGet(
    "text.display3.lineHeight",
    theme.text.display3.lineHeight
  )};
  color: ${themeGet("text.headings.color", theme.text.headings.color)};
  font-size: ${themeGet(
    "text.display3.fontSize",
    theme.text.display3.fontSize
  )};
`;

Display3.displayName = "Display3";

Display3.defaultProps = {
  as: "span"
};
