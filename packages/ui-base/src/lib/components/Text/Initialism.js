import styled from "styled-components";
import { Text } from "lib/components/Text/Text";

export const Initialism = styled(Text)`
  font-size: 90%;
  text-transform: uppercase;
`;

Initialism.displayName = "Initialism";

Initialism.defaultProps = {
  as: "abbr"
};
