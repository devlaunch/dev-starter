import styled from "styled-components";
import { Text } from "lib/components/Text/Text";

export const B = styled(Text)`
  font-weight: bolder;
`;

B.displayName = "B";

B.defaultProps = {
  as: "b"
};
