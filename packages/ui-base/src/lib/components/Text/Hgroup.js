import styled from "styled-components";
import { Text } from "lib/components/Text/Text";

export const Hgroup = styled(Text)`
  display: block;
`;

Hgroup.displayName = "Hgroup";

Hgroup.defaultProps = {
  as: "hgroup"
};
