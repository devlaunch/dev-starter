import { NavLink } from "rebass";

const StyledNavLink = NavLink.extend`
  font-weight: ${props => props.theme.fontWeights.normal};
  transition: color 0.2s ease;
  &:hover {
    text-decoration: none;
  }
`;

export default StyledNavLink;
