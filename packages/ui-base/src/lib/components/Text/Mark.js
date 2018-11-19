import styled from "styled-components";
import { Text } from "./Text";
import { themeGet } from "styled-system";
import { theme } from "../../theme/base-theme";

export const Mark = styled(Text)`
  padding: ${themeGet("text.mark.padding", theme.text.mark.padding)};
  background-color: ${themeGet("text.mark.color.bg", theme.text.mark.color.bg)};
`;

Mark.displayName = "Mark";

Mark.defaultProps = {
  as: "mark"
};
