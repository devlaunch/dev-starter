import Header from "./Header";
import styled from "styled-components";

const LayoutStyled = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #DDD;
`

const Layout = (props) => (
  <LayoutStyled>
    <Header />
    {props.children}
  </LayoutStyled>
);

export default Layout;