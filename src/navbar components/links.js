import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: white;
`;

const Links = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const Link = styled.div`
  a {
    text-decoration: none;
    color: white;
  }
`;

const Icon = styled.img``;

const Nav = () => {
  return (
    <Container>
      <Links>
        <Link>
          <Icon />
          <a href="/home">Home</a>
        </Link>
        <Link>
          <Icon />
          <a href="/products">Products</a>
        </Link>
        <Link>
          <Icon />
          <a href="/basket">Basket</a>
        </Link>
        <Link>
          <Icon />
          <a href="/account">My account</a>
        </Link>
      </Links>
    </Container>
  );
};

export default Nav;
