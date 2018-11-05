import styled from "styled-components";
import { Text } from "lib/components/Text/Text";
import { themeGet } from "styled-system";
import { theme } from "lib/theme/base-theme";

export const Blockquote = styled(Text)`
  margin: 0 0 1rem;
  margin-bottom: ${themeGet(
    "text.blockquote.marginBottom",
    theme.text.blockquote.marginBottom
  )};
  font-size: ${themeGet(
    "text.blockquote.fontSize",
    theme.text.blockquote.fontSize
  )};
`;

const Footer = styled(Text)`
  display: block;
  font-size: ${themeGet(
    "text.blockquote.small.fontSize",
    theme.text.blockquote.small.fontSize
  )};
  color: ${themeGet(
    "text.blockquote.small.color",
    theme.text.blockquote.small.color
  )};

  &::before {
    content: "\2014\00A0";
  }
`;

Blockquote.displayName = "Blockquote";
Blockquote.Footer = Footer;

Blockquote.defaultProps = {
  as: "blockquote"
};
