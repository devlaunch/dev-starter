import styled from "styled-components";
import { Text } from "./Text";
import { themeGet } from "styled-system";
import { theme } from "../../theme/base-theme";

export const Small = styled(Text)`
  font-size: ${themeGet("text.small.fontSize", theme.text.small.fontSize)};
  font-weight: ${themeGet(
    "text.small.fontWeight",
    theme.text.small.fontWeight
  )};
`;

Small.displayName = "Small";

Small.defaultProps = {
  as: "small"
};
