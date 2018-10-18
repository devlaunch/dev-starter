import React from "react";
import styled, { css } from "styled-components";
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
  themeGet,
  borders
} from "styled-system";
import {
  applyStyleModifiers,
  styleModifierPropTypes
} from "styled-components-modifiers";

const config = {
  dismissible: () => `
    padding-right: 4rem;
  `,
  primary: () => `
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;

    & > hr {
      border-top-color: #9fcdff;
    }

    & > a,
    & > a:hover {
      color: #002752;
    }
  `,
  secondary: () => `
    color: #383d41;
    background-color: #e2e3e5;
    border-color: #d6d8db;

    & > hr {
      border-top-color: #c8cbcf;
    }

    & > a,
    & > a:hover {
      color: #202326;
    }
  `,
  success: () => `
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;

    & > hr {
      border-top-color: #b1dfbb;
    }

    & > a,
    & > a:hover {
      color: #0b2e13;
    }
  `,
  info: () => `
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;

    & > hr {
      border-top-color: #abdde5;
    }

    & > a,
    & > a:hover {
      color: #062c33;
    }
  `,
  warning: () => `
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;

    & > hr {
      border-top-color: #ffe8a1;
    }

    & > a,
    & > a:hover {
      color: #533f03;
    }
  `,
  danger: () => `
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;

    & > hr {
      border-top-color: #f1b0b7;
    }

    & > a,
    & > a:hover {
      color: #491217;
    }
  `,
  light: () => `
    color: #818182;
    background-color: #fefefe;
    border-color: #fdfdfe;

    & > hr {
      border-top-color: #ececf6;
    }

    & > a,
    & > a:hover {
      color: #686868;
    }
  `,
  dark: () => `
    color: #1b1e21;
    background-color: #d6d8d9;
    border-color: #c6c8ca;

    & > hr {
      border-top-color: #b9bbbe;
    }

    & > a,
    & > a:hover {
      color: #040505;
    }
  `
};

const AlertStyled = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;

  & > a {
    font-weight: 700;
  }

  & > h1,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  & > h6 {
    color: inherit;
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

export const Alert = props => <AlertStyled {...props} />;

Alert.propTypes = {
  modifiers: styleModifierPropTypes(config),
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
  ...borders.propTypes,
  ...width.propTypes
};

Alert.defaultProps = {
  modifiers: ["light"]
};
