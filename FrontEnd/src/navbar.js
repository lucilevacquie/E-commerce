import React from "react";
import styled from "styled-components";
import Logo from "./navbar-components/logo";
import Name from "./navbar-components/name";
import Nav from "./navbar-components/links";

const Container = styled.div`
  height: 100px;
  background-color: blue;
  width: 100%;
  display: grid;
  grid-template-columns: 20% 30% 50%;
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
