import styled from "styled-components";
import { Text } from "./Text";
import { themeGet } from "styled-system";
import { theme } from "../../theme/base-theme";

export const P = styled(Text)`
  margin-top: 0;
  margin-bottom: ${themeGet(
    "text.paragraph.marginBottom",
    theme.text.paragraph.marginBottom
  )};
`;

P.displayName = "P";

P.defaultProps = {
  as: "p"
};
