import styled from "styled-components";

import { theme, width, fontFamily, fontSize, fontWeight } from "@devlaunch/ui-config";

const Container = styled.div`
  font-family: ${props => fontFamily(props, "container").default};
  width: ${props => width(props, "container").default};
  margin-right: auto;
  margin-left: auto;
  font-size: ${props => fontSize(props, "container").default};
  font-weight: ${props => fontWeight(props, "container").default};
  line-height: 1.5;
  box-sizing: border-box;
  @media (min-width: ${props => props.theme.screenSize.sm}) {
    max-width: ${props => (props.fluid ? width(props, "container").default : width(props, "container").fluid.sm)};
    box-sizing: border-box;
  }
  @media (min-width: ${props => props.theme.screenSize.md}) {
    max-width: ${props => (props.fluid ? width(props, "container").default : width(props, "container").fluid.md)};
  }
  @media (min-width: ${props => props.theme.screenSize.xl}) {
    max-width: ${props => (props.fluid ? width(props, "container").default : width(props, "container").fluid.lg)};
  }
  @media (min-width: ${props => props.theme.screenSize.lg}) {
    max-width: ${props => (props.fluid ? width(props, "container").default : width(props, "container").fluid.xl)};
  }
`;

Container.displayName = "Container";
Container.defaultProps = {
  theme
};

export { Container };
