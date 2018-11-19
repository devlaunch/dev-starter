import styled from "styled-components";
import { Text } from "./Text";
import { themeGet } from "styled-system";
import { theme } from "../../theme/base-theme";

export const H2 = styled(Text)`
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
  font-size: ${themeGet("text.h2.fontSize", theme.text.h2.fontSize)};
`;

H2.displayName = "H2";

H2.defaultProps = {
  as: "h2"
};
