import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  right: 0;
  top: ${(props) => props.theme.navbarHeight};
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
  }
  button {
    border: solid black 1px;
    background-color: black !important;
    cursor: pointer;
    color: white;
  }
`;

const Dropdown = () => {
  return (
    <Container>
      <Links>
        <a href="/account/myProfile">My Profile</a>
        <a href="/account/myOrders">My Orders</a>
        <button>Log Out</button>
      </Links>
    </Container>
  );
};

export default Dropdown;
