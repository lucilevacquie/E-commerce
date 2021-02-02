import React, { useState } from "react";
import styled from "styled-components";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
// import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import ShoppingBasketRoundedIcon from "@material-ui/icons/ShoppingBasketRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import Dropdown from "./accountDropdown";

const Container = styled.div``;

const Links = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Link = styled.div`
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
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Container>
      <Links>
        <Link>
          <a href="/home">
            <HomeRoundedIcon />
          </a>
        </Link>
        {/* <Link>
          <LocalMallRoundedIcon />
          <a href="/products">Products</a>
        </Link> */}
        <Link>
          <a href="/basket">
            <ShoppingBasketRoundedIcon />
          </a>
        </Link>
        <Link>
          <button
            href="/account"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <AccountBoxRoundedIcon />
            {showDropdown && <Dropdown />}
          </button>
        </Link>
      </Links>
    </Container>
  );
};

export default Nav;
