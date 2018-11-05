import styled from "styled-components";
import { Text } from "lib/components/Text/Text";
import { themeGet } from "styled-system";
import { theme } from "lib/theme/base-theme";

export const mark = styled(Text)`
  padding: ${themeGet("text.mark.padding", theme.text.mark.padding)};
  background-color: ${themeGet("text.mark.color.bg", theme.text.mark.color.bg)};
`;

mark.displayName = "Mark";

mark.defaultProps = {
  as: "mark"
};
