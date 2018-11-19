import styled from "styled-components";
import { Text } from "./Text";
import { themeGet } from "styled-system";
import { theme } from "../../theme/base-theme";

export const Samp = styled(Text)`
  font-family: ${themeGet("fonts.monospace", theme.fonts.monospace)};
  font-size: 1em;
`;

Samp.displayName = "Samp";

Samp.defaultProps = {
  as: "samp"
};
