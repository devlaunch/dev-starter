import styled from "styled-components";
import {
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing
} from "styled-system";

import { Box } from "lib/components/Layout/Box";

const themed = key => props => props.theme[key];

export const Text = styled(Box)`
  ${fontFamily};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${letterSpacing};
  ${themed("Text")};
`;

Text.displayName = "Text";

Text.defaultProps = {
  as: "span"
};

Text.propTypes = {
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes
};
