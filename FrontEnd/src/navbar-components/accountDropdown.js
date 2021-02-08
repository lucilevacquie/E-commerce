import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLoginContext } from "../loginProvider";

const Container = styled.div`
  position: absolute;
  right: 0;
  top: ${(props) => props.theme.sizes.navbarHeight};
  width: 200px;
`;

const Links = styled.div`
  width: 100%;
  background-color: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: black !important;
    font-size: 14px;
  }
  button {
    border: solid black 1px;
    background-color: black !important;
    cursor: pointer;
    color: white;
    font-size: 14px;
  }
`;

const Dropdown = () => {
  const { logout } = useLoginContext();

  return (
    <Container>
      <Links>
        <Link to="/account/profile">My Profile</Link>
        <Link to="/account/orders">My Orders</Link>
        <button onClick={() => logout()}>Log Out</button>
      </Links>
    </Container>
  );
};

export default Dropdown;
