import styled from "styled-components";
import { Text } from "lib/components/Text/Text";
import { themeGet } from "styled-system";
import { theme } from "lib/theme/base-theme";

export const Code = styled(Text)`
  font-family: ${themeGet("fonts.monospace", theme.fonts.monospace)};
  font-size: ${themeGet("text.code.fontSize", theme.text.code.fontSize)};
  color: ${themeGet("text.code.color", theme.text.code.color)};
  word-break: break-word;
  a > & {
    color: inherit;
  }
`;

Code.displayName = "Code";

Code.defaultProps = {
  as: "code"
};
