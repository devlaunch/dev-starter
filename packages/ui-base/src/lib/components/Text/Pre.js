import styled from "styled-components";
import { Text } from "./Text";
import { themeGet } from "styled-system";
import { theme } from "../../theme/base-theme";

export const Pre = styled(Text)`
  font-family: ${themeGet("fonts.monospace", theme.fonts.monospace)};
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
  display: block;
  font-size: ${themeGet("text.code.fontSize", theme.text.code.fontSize)};
  color: ${themeGet("text.pre.color", theme.text.pre.color)};
  code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
  }
`;

const Scrollable = styled(Text)`
  max-height: ${themeGet(
    "text.pre.scrollableMaxHeight",
    theme.text.pre.scrollableMaxHeight
  )};
  overflow-y: scroll;
`;

Pre.displayName = "Pre";
Pre.Scrollable = Scrollable;

Pre.defaultProps = {
  as: "pre"
};
