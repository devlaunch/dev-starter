import styled from "styled-components";
import PropTypes from "prop-types";
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
  borders
  // themeGet,
} from "styled-system";
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from "styled-components-modifiers";

const actionVariant = (color, bg, focusbg) => `
  color: ${color};
  background-color: ${bg};
  text-decoration: none;
  & > a {
    text-decoration: none;
    color: ${color};
    &:hover,
    &:focus {
      text-decoration: none;
      color: ${color};
    }
  }
  &:hover,
  &:focus {
    background-color: ${focusbg};
  }
`;

const variant = (color, bg) => `
  color: ${color};
  background-color: ${bg};
`;

const config = {
  pill: () => `
    padding-right: 0.6em;
    padding-left: 0.6em;
    border-radius: 10rem;
  `,
  primary: props => {
    if (props.href) {
      return actionVariant("#fff", "#007bff", "#0062cc");
    }
    return variant("#fff", "#007bff");
  },
  secondary: props => {
    if (props.href) {
      return actionVariant("#fff", "#6c757d", "#545b62");
    }
    return variant("#fff", "#6c757d");
  },
  success: props => {
    if (props.href) {
      return actionVariant("#fff", "#28a745", "#1e7e34");
    }
    return variant("#fff", "#28a745");
  },
  warning: props => {
    if (props.href) {
      return actionVariant("#212529", "#ffc107", "#d39e00");
    }
    return variant("#212529", "#ffc107");
  },
  danger: props => {
    if (props.href) {
      return actionVariant("#fff", "#dc3545", "#bd2130");
    }
    return variant("#fff", "#dc3545");
  },
  info: props => {
    if (props.href) {
      return actionVariant("#fff", "#17a2b8", "#117a8b");
    }
    return variant("#fff", "#17a2b8");
  },
  light: props => {
    if (props.href) {
      return actionVariant("#212529", "#f8f9fa", "#dae0e5");
    }
    return variant("#212529", "#f8f9fa");
  },
  dark: props => {
    if (props.href) {
      return actionVariant("#fff", "#343a40", "#1d2124");
    }
    return variant("#fff", "#343a40");
  }
};

export const Badge = styled.span`
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;

  &:empty {
    display: none;
  }

  ${applyStyleModifiers(config)};
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
`;

Badge.displayName = "Badge";

Badge.propTypes = {
  modifiers: styleModifierPropTypes(config),
  href: PropTypes.string,
  ...space.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...display.propTypes,
  ...borderRadius.propTypes,
  ...borderColor.propTypes,
  ...borders.propTypes
};

Badge.defaultProps = {
  modifiers: ["light"]
};
