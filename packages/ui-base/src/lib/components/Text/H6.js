import styled from "styled-components";
import { Text } from "lib/components/Text/Text";
import { themeGet } from "styled-system";
import { theme } from "lib/theme/base-theme";

export const H6 = styled(Text)`
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
  font-size: ${themeGet("text.h6.fontSize", theme.text.h6.fontSize)};
`;

H6.displayName = "H6";

H6.defaultProps = {
  as: "h6"
};
