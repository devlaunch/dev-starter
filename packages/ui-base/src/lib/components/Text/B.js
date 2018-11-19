import styled from "styled-components";
import { Text } from "./Text";

export const B = styled(Text)`
  font-weight: bolder;
`;

B.displayName = "B";

B.defaultProps = {
  as: "b"
};
