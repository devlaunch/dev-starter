import styled from "styled-components";
import { Text } from "./Text";

export const Sub = styled(Text)`
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
  bottom: -0.25em;
`;

Sub.displayName = "Sub";

Sub.defaultProps = {
  as: "sub"
};
