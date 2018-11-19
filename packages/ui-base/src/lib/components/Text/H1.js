import styled from "styled-components";
import { Text } from "./Text";
import { themeGet } from "styled-system";
import { theme } from "../../theme/base-theme";

export const H1 = styled(Text)`
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
  font-size: ${themeGet("text.h1.fontSize", theme.text.h1.fontSize)};
`;

H1.displayName = "H1";

H1.defaultProps = {
  as: "h1"
};
