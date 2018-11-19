import styled from "styled-components";
import { Text } from "./Text";

export const Sup = styled(Text)`
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
  top: -0.5em;
`;

Sup.displayName = "Sup";

Sup.defaultProps = {
  as: "sup"
};
