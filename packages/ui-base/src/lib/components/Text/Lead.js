import styled from "styled-components";
import { Text } from "lib/components/Text/Text";
import { themeGet } from "styled-system";
import { theme } from "lib/theme/base-theme";

export const Lead = styled(Text)`
  margin-top: 0;
  margin-bottom: ${themeGet(
    "text.lead.marginBottom",
    theme.text.lead.marginBottom
  )};
  font-weight: ${themeGet("text.lead.fontWeight", theme.text.lead.fontWeight)};
  font-size: ${themeGet("text.lead.fontSize", theme.text.lead.fontSize)};
`;

Lead.displayName = "Lead";

Lead.defaultProps = {
  as: "p"
};
