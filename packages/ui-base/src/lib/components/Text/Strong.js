import styled from "styled-components";
import { Text } from "./Text";

export const Strong = styled(Text)`
  font-weight: bolder;
`;

Strong.displayName = "Strong";

Strong.defaultProps = {
  as: "strong"
};
