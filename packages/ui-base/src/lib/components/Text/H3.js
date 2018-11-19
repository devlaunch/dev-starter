import styled from "styled-components";
import { Text } from "./Text";
import { themeGet } from "styled-system";
import { theme } from "../../theme/base-theme";

export const H3 = styled(Text)`
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
  font-size: ${themeGet("text.h3.fontSize", theme.text.h3.fontSize)};
`;

H3.displayName = "H3";

H3.defaultProps = {
  as: "h3"
};
