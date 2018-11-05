import styled from "styled-components";
import { Text } from "lib/components/Text/Text";
import { themeGet } from "styled-system";
import { theme } from "lib/theme/base-theme";

export const Display3 = styled(Text)`
  margin-top: 0;
  margin-bottom: ${themeGet(
    "text.headings.marginBottom",
    theme.text.headings.marginBottom
  )};
  font-family: ${themeGet("text.headings.font", theme.text.headings.font)};
  font-weight: ${themeGet(
    "text.headings.fontWeight",
    theme.text.headings.fontWeight
  )};
  line-height: ${themeGet(
    "text.headings.lineHeight",
    theme.text.headings.lineHeight
  )};
  color: ${themeGet("text.headings.color", theme.text.headings.color)};
  font-size: ${themeGet(
    "text.display3.fontSize",
    theme.text.display3.fontSize
  )};
`;

Display3.displayName = "Display3";

Display3.defaultProps = {
  as: "display3"
};
