import React from "react";
import styled from "styled-components";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
// import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";
import ShoppingBasketRoundedIcon from "@material-ui/icons/ShoppingBasketRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";

const Container = styled.div`
  color: white;
`;

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
`;

const Nav = () => {
  return (
    <Container>
      <Links>
        <Link>
          <HomeRoundedIcon />
          <a href="/home">Home</a>
        </Link>
        {/* <Link>
          <LocalMallRoundedIcon />
          <a href="/products">Products</a>
        </Link> */}
        <Link>
          <ShoppingBasketRoundedIcon />
          <a href="/basket">Basket</a>
        </Link>
        <Link>
          <AccountBoxRoundedIcon />
          <a href="/account">My account</a>
        </Link>
      </Links>
    </Container>
  );
};

export default Nav;
