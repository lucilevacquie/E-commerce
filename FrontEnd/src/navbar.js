import React from "react";
import styled from "styled-components";
import Name from "./navbar-components/name";
import Nav from "./navbar-components/nav";

const Container = styled.div`
  height: ${(props) => props.theme.sizes.navbarHeight};
  background-color: ${(props) => props.theme.colors.shell};
  width: 100%;
  display: grid;
  grid-template-columns: 20% 80%;
  align-items: center;
`;

const Navbar = () => {
  return (
    <Container>
      <Name />
      <Nav />
    </Container>
  );
};

export default Navbar;
