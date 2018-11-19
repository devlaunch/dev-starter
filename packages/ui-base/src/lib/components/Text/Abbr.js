import styled from "styled-components";
import { Text } from "./Text";

export const Abbr = styled(Text)`
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
`;

Abbr.displayName = "Abbr";

Abbr.defaultProps = {
  as: "abbr"
};
