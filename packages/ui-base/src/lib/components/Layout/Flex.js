import styled from "styled-components";
import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
} from "styled-system";

import { Box } from "./Box";

const themed = key => props => props.theme[key];

export const Flex = styled(Box)`
  display: "flex";
  ${flexWrap};
  ${flexDirection};
  ${alignItems};
  ${justifyContent};
  ${themed("Flex")};
`;

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes
};
