import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useLoginContext } from "../loginProvider";

import Dropdown from "./accountDropdown";
import Login from "./login";

const Container = styled.div``;

const Links = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const ALink = styled.div`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
  }
`;

const LoginButton = styled.div`
  button {
    font-size: 14px;
    border: 1px solid black;
    background-color: ${(props) => props.theme.colors.green};
    padding: 3px;
    cursor: pointer;
  }
`;

const Nav = () => {
  const { isLoggedIn } = useLoginContext();

  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <Container>
      <Links>
        <ALink>
          <Link to="/home">Home</Link>
        </ALink>
        <ALink>
          <Link to="/basket">Basket</Link>
        </ALink>
        {isLoggedIn ? (
          <ALink>
            <button
              href="/account"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              My Account
              {showDropdown && <Dropdown />}
            </button>
          </ALink>
        ) : (
          <LoginButton>
            <button onClick={() => setShowModal(true)}>Sign up | Log in</button>
            {showModal && <Login setShowModal={setShowModal} />}
          </LoginButton>
        )}
      </Links>
    </Container>
  );
};

export default Nav;
