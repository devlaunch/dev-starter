import styled from "styled-components";
import { Text } from "./Text";

export const Address = styled(Text)`
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
`;

Address.displayName = "Address";

Address.defaultProps = {
  as: "address"
};
