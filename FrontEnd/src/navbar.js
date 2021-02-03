import React from "react";
import styled from "styled-components";
import Logo from "./navbar-components/logo";
import Name from "./navbar-components/name";
import Nav from "./navbar-components/nav";

const Container = styled.div`
  height: ${(props) => props.theme.sizes.navbarHeight};
  background-color: ${(props) => props.theme.colors.shell};
  width: 100%;
  display: grid;
  grid-template-columns: 20% 50% 30%;
  align-content: center;
`;

const Navbar = () => {
  return (
    <Container>
      <Logo />
      <Name />
      <Nav />
    </Container>
  );
};

export default Navbar;
