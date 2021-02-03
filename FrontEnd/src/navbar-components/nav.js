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

const Nav = () => {
  const { isLoggedIn } = useLoginContext();

  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  console.log(showModal);
  return (
    <Container>
      <Links>
        <ALink>
          <Link href="/home">Home</Link>
        </ALink>
        <ALink>
          <Link href="/basket">Basket</Link>
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
          <div>
            <button onClick={() => setShowModal(true)}>Sign up | Log in</button>
            {showModal && <Login setShowModal={setShowModal} />}
          </div>
        )}
      </Links>
    </Container>
  );
};

export default Nav;
