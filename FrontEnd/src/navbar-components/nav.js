import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useLoginContext } from "../loginProvider";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ShoppingBasketRoundedIcon from "@material-ui/icons/ShoppingBasketRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import Dropdown from "./accountDropdown";

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
    color: white;
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

  return (
    <Container>
      <Links>
        <ALink>
          <Link href="/home">
            <HomeRoundedIcon />
          </Link>
        </ALink>
        <ALink>
          <Link href="/basket">
            <ShoppingBasketRoundedIcon />
          </Link>
        </ALink>
        {isLoggedIn ? (
          <ALink>
            <button
              href="/account"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <AccountBoxRoundedIcon />
              {showDropdown && <Dropdown />}
            </button>
          </ALink>
        ) : (
          <div>
            <button>Sign up | Log in</button>
          </div>
        )}
      </Links>
    </Container>
  );
};

export default Nav;
