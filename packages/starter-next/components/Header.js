import Link from "next/link";
import styled from "styled-components";

const NavLink = styled.a`
  font-size: 14px;
  margin-right: 15px;
`;

const Header = () => (
  <React.Fragment>
    <Link href="/">
      <NavLink>Home</NavLink>
    </Link>
    <Link href="/about">
      <NavLink>About</NavLink>
    </Link>
  </React.Fragment>
);

export default Header;
