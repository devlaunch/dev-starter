import styled from "styled-components";
import { themeGet } from "styled-system";
import { theme } from "../theme/base-theme";

export const Hr = styled.hr`
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  margin-top: ${themeGet("hr.marginY", theme.hr.marginY)};
  margin-bottom: ${themeGet("hr.marginY", theme.hr.marginY)};
  border: 0;
  border-top: ${themeGet("hr.border.width", theme.hr.border.width)}
    ${themeGet("hr.border.color", theme.hr.border.color)};
`;
