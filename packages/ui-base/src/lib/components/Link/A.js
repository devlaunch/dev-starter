import styled from "styled-components";
import { themeGet } from "styled-system";
import { Box } from "../Layout/Box";
import { theme } from "../../theme/base-theme";

export const A = styled(Box)`
  color: ${themeGet("link.color", theme.link.color)};
  text-decoration: ${themeGet("link.decoration", theme.link.decoration)};
  background-color: transparent;
  &:hover {
    color: ${themeGet("link.hover.color", theme.link.hover.color)};
    text-decoration: ${themeGet(
      "link.hover.decoration",
      theme.link.hover.decoration
    )};
  }
`;

A.displayName = "A";

A.defaultProps = {
  as: "a"
};
