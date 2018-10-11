import styled from "styled-components";
import { screenSize } from "@devlaunch/ui-config";
import {
  space,
  color,
  width,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  display,
  borderRadius,
  borderColor,
  borders,
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  flex,
  justifySelf,
  alignSelf
} from "styled-system";

export const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  box-sizing: border-box;
  @media (min-width: ${screenSize.sm}) {
    max-width: ${props => (props.fluid ? "100%" : "540px")};
    box-sizing: border-box;
  }
  @media (min-width: ${screenSize.md}) {
    max-width: ${props => (props.fluid ? "100%" : "720px")};
  }
  @media (min-width: ${screenSize.lg}) {
    max-width: ${props => (props.fluid ? "100%" : "960px")};
  }
  @media (min-width: ${screenSize.xl}) {
    max-width: ${props => (props.fluid ? "100%" : "1140px")};
  }
  ${space};
  ${width};
  ${color};
  ${fontSize};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${display};
  ${borderRadius};
  ${borderColor};
  ${borders};
  ${alignItems};
  ${alignContent};
  ${justifyContent};
  ${flexWrap};
  ${flexBasis};
  ${flexDirection};
  ${flex};
  ${justifySelf};
  ${alignSelf};
`;
