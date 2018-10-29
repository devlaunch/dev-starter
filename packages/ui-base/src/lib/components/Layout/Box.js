import styled from "styled-components";
import {
  space,
  color,
  width,
  fontSize,
  flex,
  order,
  alignSelf
} from "styled-system";

const css = props => props.css;
const themed = key => props => props.theme[key];

export const Box = styled("div")`
  ${space};
  ${width};
  ${fontSize};
  ${color};
  ${flex};
  ${order};
  ${alignSelf};
  ${themed("Box")};
  ${css};
`;

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes
};
